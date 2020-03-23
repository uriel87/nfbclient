
import React, { memo, useState } from "react";
import './about.css'


const About = (props) => {
    console.log("render About")

    return(
        <div>
            <h1>About page</h1>
        </div>
    )
}

export default memo(About)