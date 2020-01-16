
import React from 'react'
import Login from '../../login/login'
import Signup from '../../signup/signup'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './navLogout.css'


export const NavLogout = () => {
    return(
        <div className="container-logout">
            <div className="link-logout">
                <button type="button" className="check" data-toggle="modal" data-target="#login" data-backdrop="false">Login</button>
                <Login />
            </div>
            <div className="link-logout">
                <button type="button" data-toggle="modal" data-target="#signup" data-backdrop="false">Signup</button>
                <Signup />
            </div>
        </div>
    )
}

export default NavLogout;