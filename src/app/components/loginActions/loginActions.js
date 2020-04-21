
import React, { memo } from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Login from '../login/login'
import ForgotPassword from '../forgotPassword/forgotPassword'
import SignUp from '../signup/signup'
import BackBtn from '../backBtn/backBtn'
import '../lightbox/lightbox.css'
import "../../../index.css"



const LoginActions = (props) => {


    return (
        <div className="balance-container">
            {/* <BackBtn /> */}
            <BrowserRouter> 
                <div className="content">
                    <Switch>
                        <Route path="/forgotPassword" render={() => <ForgotPassword /> }/>
                        <Route path="/signUp" render={() => <SignUp /> } />
                        <Route render={() => <Login /> }/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
    
}

export default memo(LoginActions)


























