import React from 'react'

import File from './File'

function FileList(props) {

    return (
        <div>
            <div>
                {/* {props.list.map(({ node }, index) => (
                    <File key={node.__id} index={index} link={node} />
                ))} */}
                {props.files.map((file) => (
                    <File file={file} />
                ))}
            </div>
        </div>
    )

}

export default FileList