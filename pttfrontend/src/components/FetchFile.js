import React from 'react'
import queryString from 'query-string'
import { fetchQuery, graphql } from 'relay-runtime';
import { toast } from 'react-toastify';
import environment from '../Environment'
import ReactDOM from 'react-dom';
import LastRevisionByFile from '../queries/LastRevisionByFile'


const query = graphql`
    query FetchFileQuery($fullPath: String!, $revision: String){
        downloadFile(fullPath: $fullPath, revision: $revision)
    }
`

class FetchFile extends React.Component {

    async fetchFile(pathname, revision) {
        const variables = {
            fullPath: pathname,
            revision: revision,
        }

        fetchQuery(environment, query, variables)
            .then(data => {
                const filename = pathname.substring(pathname.lastIndexOf('/') + 1)
                let df = data.downloadFile
                df = df.substring(2, df.length - 3)
                console.log(df)
                const href_file = `data:application/octet-stream;base64,${df}`
                ReactDOM.render(
                    <div>
                        <a id="download-link" className='button' href={href_file} download={filename} >Download file</a>
                    </div>,
                    document.getElementById('link-div'))
                document.getElementById('download-link').click()

                console.log('******** File created from base64 encoded string ********');
            }).catch(function (error) {
                console.log(error);
                toast.error('Error retrieving the file, perhaps it is not exist', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            });
    }

    componentDidMount() {
        const pathname = this.props.location.pathname
        LastRevisionByFile(pathname, (last_revision) => {
            if (this.props.location.search) {
                const params = queryString.parse(this.props.location.search)
                const revision = params['revision'] ? params['revision'] : last_revision
                this.fetchFile(pathname, revision)
            }else{
                this.fetchFile(pathname, last_revision)
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Fetch file</h3> <br />
                <div id='link-div'>
                    Loading...
                </div>
            </div >
        )
    }

}

export default FetchFile