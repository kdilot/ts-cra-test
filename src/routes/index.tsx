import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Page, Error } from 'components';
import Test from '../components/page/test';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/page/:name" exact component={Page} />
                <Route path="/404" exact component={Error} />
                <Route path="/test" exact component={Test} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
