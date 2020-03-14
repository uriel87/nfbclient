
import React, { memo, useState } from "react";
import './about.css'


const About = (props) => {
    console.log("render About")
    const [isOpenAbout, setIsOpenAbout] = useState(props.isOpenAbout)

    const openAbout = () => {
		setIsOpenAbout(!isOpenAbout)
	}

    return(
        <div>
            { isOpenAbout?
            <div>
            <div className="lightBoxBackground" onClick={openAbout.bind(this)}></div>
            <div className="lightBoxContainer">
                <span onClick={openAbout.bind(this)}>X</span>
                <h1>About page</h1>
                <h2>{JSON.stringify(props)}</h2>
            </div>
            </div> : ""
            }
        </div>
    )
}

export default memo(About)