
import React, {memo} from 'react'


const About = () => {
    console.log("render About")

    return(
        <div>
            <h1>About page</h1>
        </div>
    )
}

export default memo(About)