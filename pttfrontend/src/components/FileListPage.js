import React from 'react'
import { fetchQuery, graphql } from 'relay-runtime';
import environment from '../Environment'
import FileList from './FileList'
import { toast } from 'react-toastify';


const query = graphql`
    query FileListPageQuery{
        filesByUser{
            name
            path
            fileVersion{
                edges{
                    node{
                        version
                    }
                }
            }
        }
    }
`

class FileListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            visible: false
        };
    }

    componentDidMount() {
        fetchQuery(environment, query, {})
            .then(data => {
                // setFileList(data.filesByUser)
                // setVisible(true)
                this.setState({ fileList: data.filesByUser, visible: true })
            }).catch(function (error) {
                console.log(error);
                toast.error('Error retrieving the file list', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            });
    }

    render() {
        if (this.state.visible) {
            return (
                <div>
                    <h4>File list</h4>
                    <FileList files={this.state.fileList} />
                </div>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }

    }

}

export default FileListPage
