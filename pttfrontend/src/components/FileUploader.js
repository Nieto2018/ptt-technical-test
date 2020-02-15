import React, { useState } from 'react'
import { GC_AUTH_TOKEN } from '../constants'
import axios from 'axios';
import { toast } from 'react-toastify';


function FileUploader(props) {
    const [path, setPath] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    async function _confirm() {

        if (!selectedFile) {
            toast.warn('Select a file!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            
            const query = `mutation UploadFile{
                uploadFile(path: "${path}") {
                    result
                }
            }`

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
                        setSelectedFile(null)
                        document.getElementById("myfile").value = "";
                        setPath('')
                        props.refreshFileList()
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
    }

    function onChangeFileHandler(event) {
        setSelectedFile(event.target.files[0])
    }


    return (
        <div>
            <div className='flex flex-column mt3'>
                <input className="mb2" type="file" id="myfile" onChange={onChangeFileHandler} />
                <input className="mb2" type="text" value={path} placeholder="Insert an URL (default)" onChange={(e) => setPath(e.target.value)} />
                <p>URL: /{path ? path : 'default'}/{selectedFile ? selectedFile.name : 'demo_name.ext'}</p>
            </div>
            <div className='button' onClick={() => _confirm()} >Upload file</div>
        </div>
    )
}

export default FileUploader