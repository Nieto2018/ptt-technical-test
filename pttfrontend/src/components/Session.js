import React from "react"
import { Redirect, Route } from "react-router-dom"

import {
    GC_AUTH_TOKEN,
    HOME_URL,
    LOG_IN_URL
} from '../constants'

const Session = {

    isAuthenticated() {
        const token = localStorage.getItem(GC_AUTH_TOKEN)
        let isAuthenticated = token != null && token.length > 0 ? true : false
        if (isAuthenticated) {
            isAuthenticated = true
        } else {
            Session.signout()
        }
        return isAuthenticated
    },
    signout(callback) {
        localStorage.clear()
        if (callback) {
            callback()
        }
    }

}

export default Session

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                Session.isAuthenticated() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: LOG_IN_URL,
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

// To avoid entering in log in page if a user is already logged in
export function LogInRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                Session.isAuthenticated() ? (
                    <Redirect
                        to={{
                            pathname: HOME_URL,
                            state: { from: location }
                        }}
                    />
                ) : (
                        children
                    )
            }
        />
    );
}