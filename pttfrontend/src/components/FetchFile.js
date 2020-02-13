import React from 'react'
import queryString from 'query-string'
import {
    useLocation
  } from "react-router-dom";

function FetchFile(props) {
    
    let location = useLocation();

    const url = location.pathname
    let revision = 0
    if(location.search){
        const params = queryString.parse(location.search)
        revision = params['revision'] ? params['revision'] : revision
    }

    return (
        <div>   
            <h3>Fetch file</h3> <br />
            File url: {url} <br />
            Revision: {revision}
        </div>
    )
}

export default FetchFile