import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


function File(props) {

    let history = useHistory();

    let versionList = []
    props.file.fileVersion.edges.map(({ node }) => (
        versionList.push(node.version)
    ))

    const [version, setVersion] = useState(Math.max.apply(null, versionList))
    const fullPath = '/store/' + props.file.path + props.file.name

    function handleFetchFile() {
        history.push(fullPath + '?revision=' + version)
    }

    return (
        <div className='flex mt3 items-start'>
            <div className='ml1'>
                <div>
                    {fullPath}
                </div>
                <div>Revision: 
                    <select value={version} onChange={(e) => setVersion(e.target.value)} >
                        {versionList.map((v) => (
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