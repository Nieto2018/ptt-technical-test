import React from 'react'
// import React, { useState } from 'react'
import FileUploader from './FileUploader'
import FileListPage from './FileListPage'


function Home(props) {

    return (
        <div>
            <FileUploader />
            <div id="file-list-page-div">
                <FileListPage />
            </div>
        </div>
    )
}

export default Home