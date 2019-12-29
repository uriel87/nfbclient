
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from '../login/login'
import Signup from '../signup/signup'
import Logout from '../logout/logout'

import './nav.css'



export const Nav  = () => {

    const auth = useSelector(state => state.auth);
    const[isLoggedin, setIsLoggedin] = useState(false)


    useEffect(() => {
        // console.log("useEffect - Cookies.token", Cookies.get('token'))
        Cookies.get('token')? setIsLoggedin(true) : setIsLoggedin(false)
	}, [auth]);

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

                    {!isLoggedin ? (
                    <div>
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#login" data-backdrop="false">Login</button>
                        <Login />
                    </li>
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#signup" data-backdrop="false">Signup</button>
                        <Signup />
                    </li></div>):(
                    // {/* else */}
                    <li>
                        <button type="button" className="" data-toggle="modal" data-target="#logout" >Logout</button>
                        <Logout />
                    </li>)}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;