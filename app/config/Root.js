import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import BeerDetails from '../components/BeerModal/BeerDetails/BeerDetails';
import BeerNotFound from '../components/BeerNotFound/BeerNotFound';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/details/:id" component={BeerDetails} />
                <Route component={BeerNotFound} />
            </Switch>
        </Router>
    );
};

export default Root;

