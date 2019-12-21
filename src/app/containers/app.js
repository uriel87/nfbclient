
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { setEmail } from "../actions/user.action";
import Routes from "../routes/routes";
import Nav from "../components/nav/nav"



export const App = () => {
    return (
        <Router>
            <div className="container"></div>
            <Nav />
            <Routes />
        </Router>
    );
};

export default App;