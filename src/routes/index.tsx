import React, { useEffect } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { Home, Page, Error } from 'components';
import Test from '../components/page/test';
import { Helmet } from 'react-helmet-async';
import { createBrowserHistory } from 'history';

const Root: React.FC = () => {
    const history = createBrowserHistory();
    history.listen(location => {
        // path 변경시 ga 전송
        console.log('location', location);
    });

    useEffect(() => {
        //  최초 로딩시 ga 전송 필요
        console.log('location', window.location.pathname);
    }, []);

    return (
        <BrowserRouter>
            <Router history={history}>
                <Helmet>
                    <title>라우터 페이지</title>
                </Helmet>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/page/:name" exact component={Page} />
                    <Route path="/test" exact component={Test} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </BrowserRouter>
    );
};

export default Root;
