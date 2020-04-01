
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes/routes";
import Nav from "../components/nav/nav"



export const App = () => {
    // console.log("render App")
    return (
        <Router>
            <div className="container"></div>
            <Nav />
            <Routes />
        </Router>
    );
};

export default App;