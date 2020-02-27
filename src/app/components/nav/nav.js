
import React, { useEffect, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavLogout from './navLogout/navLogout'
import NavLogin from './navLogin/navLogin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './nav.css'


export const Nav  = () => {
    console.log("render Nav")
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const[isLoggedin, setIsLoggedin] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        Cookies.get('auth')? setIsLoggedin(true) : setLogout()
    }, [auth]);

    const setLogout = () => {
        console.log("submitted in logOut.js")
        Cookies.remove('auth')
        Cookies.remove('user')
        history.push('/');	
    }

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

export default memo(Nav);