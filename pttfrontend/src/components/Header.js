import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { HOME_URL, LOG_IN_URL } from '../constants';
import Session from './Session';

class Header extends Component {
    
    render() {
        return (
            <div className='flex pa1 justify-between nowrap orange'>
                <div className='flex flex-fixed black'>
                    <div className='fw7 mr1'>Propylon Technical test</div>
                    <Link to={HOME_URL} className='ml1 no-underline black'>File manager</Link>
                </div>
                <div className='flex flex-fixed'>
                    {Session.isAuthenticated() ?
                        <div className='ml1 pointer black' onClick={() => Session.signout(() => this.props.history.push(HOME_URL)) }>logout</div>
                        :
                        <Link to={LOG_IN_URL} className='ml1 no-underline black'>login</Link>
                    }
                    <div className='ml1'>|</div>
                </div>
            </div>
        )
    }

}

export default withRouter(Header)