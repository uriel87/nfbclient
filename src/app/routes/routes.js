
  
import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../components/home/home";
import About from "../components/about/about"
import Balance from '../components/balance/balance'
import Loading from "../components/loading/loading";
import PageNoFound from "../components/pageNoFound/pageNoFound";
import Actions from '../components/actions/actions'


const Routes = () => {
	
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/balance" exact component={Balance} />
            <Route path="/actions" exact component={Actions} />
            <Route path="/loading" exact component={Loading} />

            {/* <Route path="/mediaItem/:id" exact component={MediaItem} /> */}
			<Route component={PageNoFound} />
        </Switch>
    );
	
};

export default Routes;