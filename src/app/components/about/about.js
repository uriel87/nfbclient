
import React from 'react'
import { useSelector } from "react-redux";


const About = () => {

    const user = useSelector(state => state.auth);

    return(
        <div>
            <h1>About page</h1>
            <h2 className="user-name-title"> Hello {user.userId} </h2>
        </div>
    )
}

export default About