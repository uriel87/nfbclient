
import React from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from '../login/login'
import Signup from '../signup/signup'
import Logout from '../logout/logout'

import './nav.css'



export const Nav  = () => {

    return(
        <div>
            <nav>
                <a id="logo"></a>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    {/* if login */}
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#login">Login</button>
                        <Login />
                    </li>
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#signup">Signup</button>
                        <Signup />
                    </li>
                    {/* else */}
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#logout">Logout</button>
                        <Logout />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;