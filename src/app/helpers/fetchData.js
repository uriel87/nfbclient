

import { useState, useEffect } from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import { envRoutes } from "../routes/constant.routes"


export const fetchData = async (query, ...args) => {
    console.log("in fetchData:")
    const auth = JSON.parse(Cookies.get('auth'))
    try {
        const res = await axios.post(envRoutes.envDev, {
            query: query(...args),
            headers: {
                'Content-Type': 'application/json',
                Authorization: auth.token
            }
        })
        // console.log("in fetchData - res:", res.data.data)
        return res.data.data
    } catch (err) {
        console.log("error fetchData.js - fetchData")
        throw err;
    }
};
