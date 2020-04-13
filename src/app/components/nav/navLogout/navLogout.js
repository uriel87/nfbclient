
import React, { memo } from "react";
import Login from '../../login/login'
import Signup from '../../signup/signup'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import { headerContent } from '../../../constant'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './navLogout.css'


export const NavLogout = (props) => {
    return(
        <div className="container-logout">
            <LightboxBtn content={headerContent.LOGIN} headerContent = {headerContent.LOGIN} cmp={<Login />}/>
            <LightboxBtn content={headerContent.SIGNUP} headerContent = {headerContent.SIGNUP} cmp={<Signup />}/>
        </div>
    )
}

export default memo(NavLogout)
















{/* <div className="link-logout">
    <button type="button" className="check" data-toggle="modal" data-target="#login" data-backdrop="false">Login</button>
    <Login />
</div> */}
{/* <div className="link-logout">
    <button type="button" data-toggle="modal" data-target="#signup" data-backdrop="false">Signup</button>
    <Signup />
</div> */}


{/* <LightBoxBtn content={headerContent.SIGNUP}  headerContent = {headerContent.SIGNUP} cmp={<Signup />}/> */}

