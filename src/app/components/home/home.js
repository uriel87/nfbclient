
import React, { memo, useState } from "react";
import "./home.css"
import About from "../about/about";


export const Home = () => {
	console.log("render Home")
	const [isOpenAbout, setIsOpenAbout] = useState(false)


	const openAbout = () => {
		setIsOpenAbout(!isOpenAbout)
	}

    return (
		<div className="home-container">
			<div>
				<h1 className="home-title">Home page</h1>
			</div>
		</div>
    )
}

export default memo(Home);