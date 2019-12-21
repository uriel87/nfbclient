
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Loading from "../loading"
import { envRoutes, userRoutes } from "../../routes/constant.routes";
import { setUser } from "../../actions/user.action"
import "./home.css"


export const Home = () => {
	
	// const user = useSelector(state => state.user);
	// const dispatch = useDispatch();
	// const [isLoading, setIsLoading] = useState(false)

	//  useEffect(() => {
	// 	getUser("firstuser@dd.com");
	// }, []);
	
	// const getUser = async (userEmail) => {
	// 	setIsLoading(true);
	// 	await axios.post(envRoutes.envProduction + userRoutes.getUser, {
	// 		params: {
	// 			email: userEmail
	// 		}
	// 	})
	// 	.then(response => {
	// 		dispatch(setUser(response.data))
	// 		setIsLoading(false);
	// 	})
	// 	.catch(err => {
	// 		setIsLoading(false);
	// 	})
	// }
	
    return (
	<div className="container home-text" >
	{/* {isLoading ? <Loading /> : */}
		<div>
			<h1 className="home-title" >Home page</h1>
			{/* <h2 className="user-name-title"> Hello {user.name} </h2> */}
		</div>
	}
	</div>
    )
}

export default Home;