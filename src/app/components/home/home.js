
import React, { memo } from "react";
import "./home.css"


export const Home = () => {
	console.log("render Home")

    return (
		<div className="home-container">
			<div>
				<h1 className="home-title">Home page</h1>
			</div>
		</div>
    )
}

export default memo(Home);