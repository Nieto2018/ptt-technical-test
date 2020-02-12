from .models import File
from django.contrib.auth import get_user_model
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class FileNode(DjangoObjectType):
    class Meta:
        model = File
        exclude_fields = ()
        filter_fields = []
        interfaces = (relay.Node,)


class UploadFile(graphene.Mutation):
    # Relay allows Output objects
    response = graphene.String()

    # Important!!! Relay not allows Input objects as arguments
    class Arguments:
        name = graphene.String(required=True)

    def mutate(self, info):
        file = info.context.FILE

        name = ''
        path = ''
        extension = ''

        file_db = File(
            name=name,
            path=path,
            extension=extension
        )
        file_db.save()

        return UploadFile(response="Ok")


class Query(graphene.ObjectType):
    """Root GraphQL query."""

    me = graphene.Field(UserType)
    users = graphene.List(UserType)

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            # raise Exception(settings.USER_NOT_LOGGED_IN_ERROR)
            raise Exception("User not logged!")

        return user

    def resolve_users(self, info):
        return get_user_model().objects.all()

    relay_file = relay.Node.Field(FileNode)
    relay_files = DjangoFilterConnectionField(FileNode)

    test = graphene.String()

    def resolve_test(self, info):
        return "Result test"


class Mutation(graphene.ObjectType):
    """GraphQL mutations."""

    # upload_file = UploadFile.Field()
    pass
