import {
    commitMutation,
    graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SigninUserMutation($input: ObtainJSONWebTokenInput!) {
      tokenAuth(input: $input) {
        token
        clientMutationId
      }
    }
  `

export default (username, password, callback) => {
    const variables = {
        input: {
            username,
            password,
            clientMutationId: ""
        },
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                const token = response.tokenAuth.token
                callback(token)
            },
            onError: err => console.error(err),
        },
    )
}
