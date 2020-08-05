import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';

const Home = loadable(() => import('components/home'));
const Error = loadable(() => import('components/error'));
const CategoryList = loadable(() => import('components/categoryList'));
const Csv = loadable(() => import('page/Csv'));
const Codeblock = loadable(() => import('page/Codeblock'));
const BoardWrite = loadable(() => import('modules/board'));
const DraftEditor = loadable(() => import('modules/draftEditor'));

const Root: React.FC = () => {
    const history = createBrowserHistory();
    // history.listen((location) => {
    //     // path 변경시 ga 전송
    //     console.log('location', location);
    // });

    // useEffect(() => {
    //     //  최초 로딩시 ga 전송 필요
    //     console.log('location', window.location.pathname);
    // }, []);

    return (
        <BrowserRouter>
            <Router history={history}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/category-list"
                            exact
                            component={CategoryList}
                        />
                        <Route path="/csv" exact component={Csv} />
                        <Route path="/codeblock" exact component={Codeblock} />
                        <Route
                            path="/boardwrite"
                            exact
                            component={BoardWrite}
                        />
                        <Route path="/editor" exact component={DraftEditor} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    );
};

export default Root;
