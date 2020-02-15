import { fetchQuery, graphql } from 'relay-runtime';
import { toast } from 'react-toastify';
import environment from '../Environment'


const query = graphql`
    query LastRevisionByFileQuery($fullPath: String!){
        lastRevisionByFile(fullPath: $fullPath)
    }
`


export default (pathname, callback) => {

    const variables = {
        fullPath: pathname
    }

    fetchQuery(environment, query, variables)
        .then(data => {
            callback(data.lastRevisionByFile)
        }).catch(function (error) {
            console.log(error);
            toast.error('Error retrieving the max revision of the file, perhaps any revision is not exist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        })

}