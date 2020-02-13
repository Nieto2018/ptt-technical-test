import React, { Component } from 'react'
// import LinkListPage from './LinkListPage'
// import CreateLink from './CreateLink'
import { Switch } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom'
import FetchFile from './FetchFile'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import { LogInRoute, PrivateRoute } from './Session'
import { HOME_URL, LOG_IN_URL } from '../constants'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <ToastContainer />

        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            {/* <Route exact path='/' component={LinkListPage} /> */}
            {/* <Route exact path='/login' component={Login} /> */}
            {/* <Route exact path='/create' component={CreateLink} /> */}
            <LogInRoute exact path={LOG_IN_URL}>
              <Login />
            </LogInRoute>
            <PrivateRoute exact path={HOME_URL}>
              <Home />
            </PrivateRoute>
            <FetchFile />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
