
import React, { useEffect, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavLogout from './navLogout/navLogout'
import NavLogin from './navLogin/navLogin'
import './nav.css'


export const Nav  = () => {
    const auth = useSelector(state => state.auth);
    const[isLoggedin, setIsLoggedin] = useState(false)
    const[isMobileNavVisible, setIsMobileNavVisible] = useState(false)


    useEffect(() => {
        Cookies.get('auth')? setIsLoggedin(true) : setIsLoggedin(false)
    }, [auth]);

    const showMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible)
    }

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