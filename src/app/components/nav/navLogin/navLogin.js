
import React, { useState, useEffect, memo } from 'react'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import NavUser from '../navUser/navUser'
import { setUser } from "../../../actions/user.action"
import { actionFetch } from '../../../helpers/actionFetch'
import { fetchAction } from '../../../constant'



export const NavLogin = () => {
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        getUserDetails()
    }, []);

    const getUserDetails = async () => {
        try {
            const userDetalis = await actionFetch(fetchAction.GET_USER_DETAILS)
            console.log("getUserDetails - userDetalis", userDetalis.getUserDetails)
            dispatch(setUser(userDetalis.getUserDetails))
            Cookies.set('user', userDetalis.getUserDetails)
            setUserDetails(userDetalis.getUserDetails)
        } catch(err) {
            console.log("error personalArea.js - getUserDetails", err)
            throw err;
        }
    }

    return(
        <div className="container-logout">
            <Link to="/balance">Balance</Link>
            <Link to="/expectedExpenses" >Expected expenses</Link>
            <Link to="/tasks">Tasks</Link>
            <NavUser user={userDetails}/>
        </div>
    )
}

export default memo(NavLogin);











// import { fetchData } from "../../../helpers/fetchData"
// import { GET_USER_DETAILS } from "../../../queries/query"
// import './navLogin.css'
// import React, { memo } from 'react'
// import { useHistory } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import { setLogin } from "../../actions/auth.action"
// import Cookies from 'js-cookie'
// import validationAuth from "./validationAuth"
// import UseForm from '../../helpers/useForm'
// import Input from '../../components/Input/Input'
// import { formInputType, formName } from '../../constant'


// console.log("render NavLogin")


// setIsLoading(false);
// setIsLoading(false);


// setIsLoading(true);
// const auth = JSON.parse(Cookies.get('auth'))
// const userDetalis = await fetchData(GET_USER_DETAILS(auth.userId))
// console.log("getUserDetails.js - userDetalis", userDetalis)



// const getUserDetails = async () => {
//     try {
//         setIsLoading(true);
//         // const auth = JSON.parse(Cookies.get('auth'))
//         const userDetalis = await fetchData(GET_USER_DETAILS(auth.userId))
//         console.log("getUserDetails.js - userDetalis", userDetalis)
//         dispatch(setUser(userDetalis.getUserDetails))
//         Cookies.set('user', userDetalis.getUserDetails)
//         setUserDetails(userDetalis.getUserDetails)
//         setIsLoading(false);
//     } catch(err) {
//         console.log("error personalArea.js - getUserDetails", err)
//         setIsLoading(false);
//         throw err;
//     }
// }

// const getUserDetails = async () => {
//     try {
//         const data = await actionFetch(fetchAction.GET_USER_DETAILS)
//         dispatch(setLogin(data.login))
//         Cookies.set('auth', data.login)
//         history.push('/');
//     } catch(err) {
//         console.log("error in Settings submit ", err)
//         throw err;
//     }
// }


// if(isLoading) {return <div></div>}
