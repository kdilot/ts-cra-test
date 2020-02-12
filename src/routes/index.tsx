import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Page, Error } from 'components';
import Test from '../components/page/test';
import { Helmet } from 'react-helmet-async';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Helmet>
                <title>라우터 페이지</title>
            </Helmet>
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
