
  
import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../components/home/home";
import About from "../components/about/about"
import Tasks from '../components/tasks/tasks'
import Balance from '../components/balance/balance'
import Loading from "../components/loading/loading";
import PageNoFound from "../components/pageNoFound/pageNoFound";
import Settings from '../components/settings/settings'
import MonthlyeExpectedExpenses from '../components/monthlyeExpectedExpenses/monthlyeExpectedExpenses'


const Routes = () => {
	
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/balance" exact component={Balance} />
            <Route path="/tasks" exact component={Tasks} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/expectedExpenses" exact component={MonthlyeExpectedExpenses} />
            <Route path="/loading" exact component={Loading} />
			<Route component={PageNoFound} />
        </Switch>
    );
	
};

export default Routes;

{/* <Route path="/mediaItem/:id" exact component={MediaItem} /> */}
