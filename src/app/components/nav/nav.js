
import React, { useEffect, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavLogout from './navLogout/navLogout'
import NavLogin from './navLogin/navLogin'
import './nav.css'


export const Nav  = () => {
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const[isLoggedin, setIsLoggedin] = useState(false)
    const[isMobileNavVisible, setIsMobileNavVisible] = useState(false)
    console.log("isMobileNavVisible", isMobileNavVisible)


    useEffect(() => {
        Cookies.get('auth')? setIsLoggedin(true) : setLogout()
    }, [auth]);

    const setLogout = () => {
        console.log("submitted in logOut.js")
        Cookies.remove('auth')
        Cookies.remove('user')
        history.push('/');	
    }

    const showMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible)
    }

    // if(isLoading) {return <div></div>}
    return(
        <div>
            <nav className="nav-main">
                
                <Link id="logo" to= {isLoggedin? "/balance" : "/"} ></Link>

                <div className={`${isMobileNavVisible ? "main-mobile-background" : ""}`} 
                    onClick={showMobileNav}>
                </div>

                <button className="nav-mobile-btn" onClick={showMobileNav}><i className="fas fa-bars"></i></button>
                <div className={`container-link ${isMobileNavVisible ? `show-container-link` : ""}`}>
                    <div className="nav-base">
                        <Link to="/about" onClick={showMobileNav} >About </Link>
                        { isLoggedin ? <NavLogin showMobileNav={showMobileNav} /> : <NavLogout /> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default memo(Nav);