import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


function File(props) {

    let history = useHistory();

    let revisionList = []
    props.file.fileRevision.edges.map(({ node }) => (
        revisionList.push(node.revision)
    ))

    const [revision, setRevision] = useState(Math.max.apply(null, revisionList))
    const fullPath = props.file.path + '/' + props.file.name

    function handleFetchFile() {
        history.push(fullPath + '?revision=' + revision)
    }

    return (
        <div className='flex mt3 items-start'>
            <div className='ml1'>
                <div>
                    {fullPath}
                </div>
                <div>Revision:
                    <select value={revision} onChange={(e) => setRevision(e.target.value)} >
                        {revisionList.map((v) => (
                            <option value={v}>{v}</option>
                        ))}
                    </select>
                </div>
                <div className='button' onClick={() => handleFetchFile()}>Fetch file</div>
            </div>
        </div>
    )

}

export default File