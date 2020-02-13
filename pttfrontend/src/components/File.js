import React from 'react'


function File(props) {

    return (
        <div className='flex mt2 items-start'>
            {/* <div className='flex items-center'>
                <span className='gray'>{this.props.index + 1}.</span>
                {userId && <div className='ml1 gray fl1' onClick={() => this._voteForLink()}>▲</div>}
            </div> */}
            <div className='ml1'>
                <div>{props.file.path}/{props.file.name}
                <select>
                    {props.file.fileVersion.edges.map(({ node }) => (
                        <option value={node.version}>{node.version}</option>
                        //  <p>{node.version}</p>
                    ))}
                </select>
                </div>
            </div>
        </div >
    )

}

export default File