from file_manager import schema as file_manager_schema
# from users import schema as users_schemas

import graphene
import graphql_jwt


# class Query(file_manager_schema.Query, users_schemas.Query, graphene.ObjectType):
class Query(file_manager_schema.Query, graphene.ObjectType):
    class Meta:
        description = 'The project root query definition'


# class Mutation(file_manager_schema.Mutation, users_schemas.Mutation, graphene.ObjectType):
class Mutation(file_manager_schema.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.relay.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.relay.Verify.Field()
    refresh_token = graphql_jwt.relay.Refresh.Field()

    # Long running refresh tokens
    revoke_token = graphql_jwt.relay.Revoke.Field()

    class Meta:
        description = 'The project root mutation definition'


graphql_schema = graphene.Schema(query=Query, mutation=Mutation)
