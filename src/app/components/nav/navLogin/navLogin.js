
import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavUser from '../navUser/navUser'
import { fetchData } from "../../../helpers/fetchData"
import { setUser } from "../../../actions/user.action"
import { GET_USER_DETAILS } from "../../../queries/query"
import './navLogin.css'


export const NavLogin = () => {
    const dispatch = useDispatch();
    const [ isLoading, setIsLoading ] = useState(false)
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        getUserDetails()
    }, []);

    const getUserDetails = async () => {
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            const userDetalis = await fetchData(GET_USER_DETAILS(auth.userId))
            dispatch(setUser(userDetalis.getUserDetails))
            Cookies.set('user', userDetalis.getUserDetails)
            setUserDetails(userDetalis.getUserDetails)
            setIsLoading(false);
        } catch(err) {
            console.log("error personalArea.js - getUserDetails", err)
            setIsLoading(false);
            throw err;
        }
    }

    if(isLoading) {return <div></div>}

    return(
        <div className="container-logout">
            <Link to="/balance">Balance</Link>
            <Link to="/tasks">Tasks</Link>
            <NavUser user={userDetails}/>
        </div>
    )
}

export default memo(NavLogin);


// console.log("render NavLogin")
