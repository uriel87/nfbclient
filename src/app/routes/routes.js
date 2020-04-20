
  
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
            <Route path="/" exact render={() => <Home /> } />
            <Route path="/about" exact render={() => <About /> } />
            <Route path="/balance" exact render={() => <Balance /> } />
            <Route path="/tasks" exact render={() => <Tasks /> }/>
            <Route path="/settings" exact render={() => <Settings /> } />
            <Route path="/expectedExpenses" exact render={() => <MonthlyeExpectedExpenses /> } />
            <Route path="/loading" exact render={() => <Loading /> } />
			<Route render={() => <PageNoFound /> } />
        </Switch>
    );
	
};

export default Routes