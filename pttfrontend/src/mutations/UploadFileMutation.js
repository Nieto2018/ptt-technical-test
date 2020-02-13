import {
    commitMutation,
    graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UploadFileMutation($path: String!) {
        uploadFile(path: $path) {
            result
        }
    }
  `

export default (file, path, callback) => {
    const variables = {
        path: path
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
