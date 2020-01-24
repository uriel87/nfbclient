
import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from "react-redux"
import {Link, useHistory} from 'react-router-dom'
import axios from "axios"
import Cookies from 'js-cookie'
import NavUser from '../navUser/navUser'
import { setUser } from "../../../actions/user.action"
import { envRoutes } from "../../../routes/constant.routes"
import { GET_USER_DETAILS } from "../../../queries/query"
import './navLogin.css'


export const NavLogin = () => {
    console.log("render NavLogin")

    const dispatch = useDispatch();
    const history = useHistory();
    const [ isLoading, setIsLoading ] = useState(false)
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        getUserDetails(JSON.parse(Cookies.get('auth')))
    }, []);

    // const submit = useCallback(() => {
    //   getUserToken();
    // }, [authInputs])

    const getUserDetails = async (auth) => {
        try {
            setIsLoading(true);
            const userDetalis = await axios.post(envRoutes.envDev, {
                query: GET_USER_DETAILS(auth.userId),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: auth.token
                }
            });

            dispatch(setUser(userDetalis.data.data.getUserDetails))
            Cookies.set('user', userDetalis.data.data.getUserDetails)
            setUserDetails(userDetalis.data.data.getUserDetails)
            setIsLoading(false);
        } catch(err) {
            console.log("error personalArea.js - getUserDetails")
            setIsLoading(false);
            throw err;
        }
    }

    if(isLoading) {return <div></div>}

    return(
        <div className="container-logout">
            <Link to="/balance">Balance</Link>
            <Link to="/personalArea">Operation</Link>
            <Link to="/actions">actions</Link>
            <NavUser user={userDetails}/>
        </div>
    )
}

export default memo(NavLogin);