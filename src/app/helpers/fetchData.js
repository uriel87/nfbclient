

import axios from "axios";
import Cookies from 'js-cookie'
import { envRoutes } from "../routes/constant.routes"


export const fetchData = async (query) => {
    let auth;
    if (Cookies.get('auth') === undefined || Cookies.get('auth') === null) {
        auth = '' 
    } else {
        auth = JSON.parse(Cookies.get('auth'))
    }

    let options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: auth
        }
    }
    
    try {
        const res = await axios.post(
            envRoutes.envDev,
            query,
            options
        )
        return res.data.data
    } catch (err) {
        console.log("error fetchData.js - fetchData", err)
        throw err;
    }
};



// console.log("in fetchData:")
// console.log("in fetchData - res:", res.data.data)

// let data = res.data.data
// let status = res.status

// return {
//     data,
//     status
// }

