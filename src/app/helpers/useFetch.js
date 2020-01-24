
import { useState, useEffect } from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import { envRoutes } from "../routes/constant.routes"

const useFetch = (query, ...args) => {
    const auth = JSON.parse(Cookies.get('auth'))
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await axios.post(envRoutes.envDev, {
                    query: query(...args),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: auth.token
                    }
                })
                setResponse(res.data.data);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setError(error);
            }
        };
        fetchData();
    }, [query]);
    return { response, error };
};


export default useFetch




    //console.log("in fetchData")
    // console.log("in fetchData - url:", url)
    // console.log("in fetchData - query:", query)
    // console.log("in fetchData - args:", args)
    //console.log("in fetchData - res.data.data:", res.data.data)





    