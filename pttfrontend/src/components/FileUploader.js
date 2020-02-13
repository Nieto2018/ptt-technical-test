import React, { useState } from 'react'
import { } from '../mutations/SigninUserMutation'
import { GC_AUTH_TOKEN } from '../constants'
import axios from 'axios';
import { toast } from 'react-toastify';
import ReactDOM from 'react-dom'
import FileListPage from './FileListPage'

const query = `mutation UploadFile{
            uploadFile(path: "documents") {
            result
            }
        }`

function FileUploader(props) {
    const [path, setPath] = useState()
    const [selectedFile, setSelectedFile] = useState(null)

    async function _confirm() {

        const data = new FormData()
        data.append('fileItem', selectedFile)
        data.append('query', query)

        let token = localStorage.getItem(GC_AUTH_TOKEN)
        token = token ? token : ''

        axios.post('http://localhost:8000/graphql/', data, {
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/graphql',
            }
        })
            .then(res => {
                console.log(res.statusText)

                if (res.statusText === 'OK') {
                    toast.success('File uploaded!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                    ReactDOM.createPortal(
                        <FileListPage />,                        
                        document.getElementById('file-list-page-div')
                    )
                } else {
                    toast.error('Error: File not uploaded!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }
            }).catch(function (error) {
                console.log(error);
                toast.error('Error: File not uploaded!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            })
    }

    function onChangeFileHandler(event) {
        setSelectedFile(event.target.files[0])
    }


    return (
        <div>
            <div className='flex flex-column mt3'>
                <input className="mb2" type="file" name="myfile" onChange={onChangeFileHandler} />
                <input className="mb2" type="text" value={path} placeholder="Insert an URL (default)" onChange={(e) => setPath(e.target.value)} />
                <p>URL: /store/{path ? path : 'default'}/{selectedFile ? selectedFile.name : 'demo_name.ext'}</p>
            </div>
            <div className='button' onClick={() => _confirm()}>Upload file</div>
        </div>
    )
}

export default FileUploader