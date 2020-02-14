import React from 'react'
// import React, { useState } from 'react'
import FileUploader from './FileUploader'
import FileListPage from './FileListPage'
import { toast } from 'react-toastify';
import environment from '../Environment'
import { fetchQuery, graphql } from 'relay-runtime';

const query = graphql`
    query HomeQuery{
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

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            visible: false
        };
    }

    refreshFileList(o) {
        fetchQuery(environment, query, {})
            .then(data => {
                o.setState({ fileList: data.filesByUser, visible: true })
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

    componentDidMount() {
        this.refreshFileList(this)
    }

    render() {
        return (
            <div>
                <FileUploader refreshFileList={() => this.refreshFileList(this)}/>
                {this.state.visible ? 
                    <FileListPage fileList={this.state.fileList} />
                :
                    <div>Loading...</div>
                }
            </div>
        )
    }

}

export default Home