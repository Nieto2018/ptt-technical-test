import React from 'react'
import FileList from './FileList'


function FileListPage(props) {

    return (
        <div>
            <h4>File list</h4>
            {props.fileList && props.fileList.length > 0 ?
                <FileList files={props.fileList} />
            :
                <p>File list empty</p>
            }
        </div>
    )

}

export default FileListPage
