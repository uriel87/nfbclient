
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import NavLogout from './navLogout/navLogout'
import NavLogin from './navLogin/navLogin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './nav.css'


export const Nav  = () => {
    const auth = useSelector(state => state.auth);
    const[isLoggedin, setIsLoggedin] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        if(Cookies.get('auth')) {
            setIsLoggedin(true)
        }
    }, [auth]);
    

    if(isLoading) {return <div></div>}

    return(
        <div>
            <nav>
                <Link id="logo" to="/" className="check"></Link>
                <div className="container-link">
                    <div className="nav-base">
                        <Link to="/about">About</Link>
                        { isLoggedin ? <NavLogin /> : <NavLogout /> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;