
import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { setUser } from "../../../actions/user.action"
import { actionFetch } from '../../../helpers/actionFetch'
import { fetchAction } from '../../../constant'
import Logout from '../../logout/logout'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import { headerContent } from '../../../constant'


export const NavLogin = (props) => {
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        try {
            const userDetailsRes = await actionFetch(fetchAction.GET_USER_DETAILS)
            dispatch(setUser(userDetailsRes.getUserDetails))
            Cookies.set('user', userDetailsRes.getUserDetails)
            setUserDetails(userDetailsRes.getUserDetails)
        } catch(err) {
            console.log("error personalArea.js - getUserDetails", err)
            throw err;
        }
    }

    return(
        <div className="container-logout">
            <Link to="/balance" onClick={props.showMobileNav }>Balance</Link>
            <Link to="/expectedExpenses" onClick={props.showMobileNav } >Expected expenses</Link>
            <Link to="/tasks" onClick={props.showMobileNav }>Tasks</Link>
            <Link to="/settings" onClick={props.showMobileNav }>Settings</Link>
            <LightboxBtn
                showMobileNav={props.showMobileNav }
                content={headerContent.LOGOUT}
                headerContent = {headerContent.LOGOUT}
                cmp={<Logout />} />
        </div>
    )
}

export default memo(NavLogin);