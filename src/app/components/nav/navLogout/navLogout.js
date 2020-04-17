
import React, { memo } from "react";
import Login from '../../login/login'
import LoginActions from '../../loginActions/loginActions'
import Signup from '../../signup/signup'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import { headerContent } from '../../../constant'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './navLogout.css'


export const NavLogout = (props) => {
    return(
        <div className="container-logout">
            <LightboxBtn content={headerContent.LOGIN} cmp={<LoginActions />}/>
            <LightboxBtn content={headerContent.SIGNUP} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/>
        </div>
    )
}

export default memo(NavLogout)

