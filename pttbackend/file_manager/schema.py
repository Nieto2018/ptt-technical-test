from .models import File, FileRevision
from base64 import b64encode
from django.contrib.auth import get_user_model
from django.db import transaction
from django.db.models import Max
from graphene import relay
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required

import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class FileType(DjangoObjectType):
    class Meta:
        model = File


class FileRevisionType(DjangoObjectType):
    class Meta:
        model = FileRevision


class FileNode(DjangoObjectType):
    class Meta:
        model = File
        exclude_fields = ()
        filter_fields = []
        interfaces = (relay.Node,)


class FileRevisionNode(DjangoObjectType):
    class Meta:
        model = FileRevision
        exclude_fields = ()
        filter_fields = []
        interfaces = (relay.Node,)


class Query(graphene.ObjectType):
    """Root GraphQL query."""

    me = graphene.Field(UserType)
    files_by_user = graphene.List(FileType)
    file_revisions_by_user = graphene.List(FileRevisionType)
    download_file = graphene.String(full_path=graphene.String(required=True), revision=graphene.String())
    last_revision_by_file = graphene.Int(full_path=graphene.String(required=True))

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            # raise Exception(settings.USER_NOT_LOGGED_IN_ERROR)
            raise Exception("User not logged!")

        return user

    @login_required
    def resolve_files_by_user(self, info):
        return File.objects.filter(user=info.context.user).all()

    @login_required
    def resolve_file_revisions_by_user(self, info):
        return FileRevision.objects.filter(file_info__user=info.context.user).all()

    @login_required
    def resolve_download_file(self, info, full_path, revision):

        user = get_user_model().objects.get(username=info.context.user.username)

        path = ''
        if len(full_path.rsplit('/', 1)) > 1:
            [path, filename] = str(full_path).rsplit('/', 1)
        else:
            filename = full_path

        file_revision = FileRevision.objects.get(file_info__user=user,
                                                 file_info__name=filename,
                                                 file_info__path=path,
                                                 revision=revision)

        file_data = file_revision.file.read()

        return b64encode(file_data)

    @login_required
    def resolve_last_revision_by_file(self, info, full_path):
        user = get_user_model().objects.get(username=info.context.user.username)

        path = ''
        if len(full_path.rsplit('/', 1)) > 1:
            [path, filename] = str(full_path).rsplit('/', 1)
        else:
            filename = full_path

        file_revision = FileRevision.objects.filter(file_info__user=user,
                                                    file_info__name=filename,
                                                    file_info__path=path).aggregate(Max('revision'))

        return file_revision['revision__max']


class UploadFile(graphene.Mutation):
    result = graphene.String()

    class Arguments:
        path = graphene.String()

    @login_required
    @transaction.atomic
    def mutate(self, info, path):
        files = info.context.FILES
        uploaded_file = files['fileItem']

        user = get_user_model().objects.get(username=info.context.user.username)

        file_path = path if path else 'default'
        file_path = '/' + file_path if not file_path.startswith('/') else file_path

        if File.objects.filter(user=user, name=uploaded_file.name, path=file_path).exists():
            file = File.objects.get(user=user, name=uploaded_file.name, path=file_path)
            last_file_revision = FileRevision.objects.filter(file_info=file).aggregate(Max('revision'))
            revision = last_file_revision['revision__max'] + 1
        else:
            file = File(
                user=user,
                name=uploaded_file.name,
                path=file_path)
            file.save()
            revision = 0

        file_revision = FileRevision(
            file_info=file,
            file=uploaded_file,
            full_path='store{0}/{1}/{2}'.format(file.path, revision, file.name),
            revision=revision)
        file_revision.save()

        return UploadFile(result="OK")


class Mutation(graphene.ObjectType):
    """GraphQL mutations."""

    upload_file = UploadFile.Field()
