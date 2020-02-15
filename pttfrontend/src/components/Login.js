import React, { useState } from 'react'
import { GC_USERNAME, GC_AUTH_TOKEN } from '../constants'
import SigninUserMutation from '../mutations/SigninUserMutation'
import {
    useHistory,
    useLocation
} from "react-router-dom";

function Login() {

    let history = useHistory();
    let location = useLocation();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function _confirm () {
        SigninUserMutation(username, password, (token) => {
            _saveUserData(username, token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        })
    }

    async function _saveUserData(username, token) {
        localStorage.setItem(GC_USERNAME, username)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }

    return (
        <div>
            <h4 className='mv3'>Login</h4>
            <div className='flex flex-column'>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type='text'
                    placeholder='Your username'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                />
            </div>
            <div className='flex mt3'>
                <div className='pointer mr2 button' onClick={() => _confirm()}>Login</div>
            </div>
            <div className='flex flex-column'>
                <h5>Test users</h5>
                <p>testuser1/tupasswd1</p>
                <p>testuser2/tupasswd2</p>
            </div>
        </div>
    )

}

export default Login