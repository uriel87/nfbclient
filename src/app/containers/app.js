
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../routes/routes";
import Nav from "../components/nav/nav"
import Footer from "../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


export const App = () => {
    return (
        <div className="app-container">
            <Router>
                <Nav />
                <Routes />
                <Footer />
            </Router>
        </div>

    );
};

export default App;