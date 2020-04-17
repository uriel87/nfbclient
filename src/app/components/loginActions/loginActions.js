
import React, { memo, useEffect } from 'react'
import { Route, NavLink, HashRouter, useHistory } from "react-router-dom"
import Login from '../login/login'
import ForgotPassword from '../forgotPassword/forgotPassword'
import SignUp from '../signup/signup'
import BackBtn from '../backBtn/backBtn'
import '../lightbox/lightbox.css'
import "../../../index.css"



const LoginActions = (props) => {

    return (
        <div className="balance-container">
            <BackBtn />
            <HashRouter>
                <div className="content">
                    <Route path="/" exact component={Login} />
                    <Route path="/forgotPassword" component={ForgotPassword} />
                    <Route path="/signUp" component={SignUp} />
                </div>
            </HashRouter>
        </div>
    )
    
}

export default memo(LoginActions)


























