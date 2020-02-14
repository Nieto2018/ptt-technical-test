import React from 'react'

import File from './File'

function FileList(props) {

    return (
        <div>
            <div>
                {props.files.map((file) => (
                    <File file={file} />
                ))}
            </div>
        </div>
    )

}

export default FileList