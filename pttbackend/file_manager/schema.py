from .models import File, FileVersion
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


class FileVersionType(DjangoObjectType):
    class Meta:
        model = FileVersion


class FileNode(DjangoObjectType):
    class Meta:
        model = File
        exclude_fields = ()
        filter_fields = []
        interfaces = (relay.Node,)


class FileVersionNode(DjangoObjectType):
    class Meta:
        model = FileVersion
        exclude_fields = ()
        filter_fields = []
        interfaces = (relay.Node,)


class Query(graphene.ObjectType):
    """Root GraphQL query."""

    me = graphene.Field(UserType)
    users = graphene.List(UserType)
    files = graphene.List(FileType)
    files_by_user = graphene.List(FileType)
    file_versions = graphene.List(FileVersionType)
    file_versions_by_user = graphene.List(FileVersionType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            # raise Exception(settings.USER_NOT_LOGGED_IN_ERROR)
            raise Exception("User not logged!")

        return user

    def resolve_users(self, info):
        return get_user_model().objects.all()

    def resolve_files(self, info):
        return File.objects.all()

    @login_required
    def resolve_files_by_user(self, info):
        return File.objects.filter(user=info.context.user).all()

    def resolve_file_versions(self, info):
        return FileVersion.objects.all()

    @login_required
    def resolve_file_versions_by_user(self, info):
        return FileVersion.objects.filter(file_info__user=info.context.user).all()


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

        if File.objects.filter(user=user, name=uploaded_file.name, path=path).exists():
            file = File.objects.get(user=user, name=uploaded_file.name, path=path)
            last_file_version = FileVersion.objects.filter(file_info=file).aggregate(Max('version'))
            version = last_file_version['version__max'] + 1
        else:
            file = File(
                user=user,
                name=uploaded_file.name,
                path=path)
            file.save()
            version = 1

        file_version = FileVersion(file_info=file, file=uploaded_file, version=version)
        file_version.save()

        return UploadFile(result="Ok")


class Mutation(graphene.ObjectType):
    """GraphQL mutations."""

    upload_file = UploadFile.Field()
