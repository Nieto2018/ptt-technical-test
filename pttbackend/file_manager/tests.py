from pttbackend.schema import graphql_schema
from gql import gql, Client
from django.test import TestCase


class TestSchemaMethods(TestCase):

    def test_test(self):
        client = Client(schema=graphql_schema)
        query = gql('''{ test }''')
        executed = client.execute(query)
        assert executed == {
            'test': 'test_result'
        }
