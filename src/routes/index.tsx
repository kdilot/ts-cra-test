import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';

const Home = loadable(() => import('pages/home'));
const Error = loadable(() => import('pages/error'));
const Csv = loadable(() => import('pages/csvDownload'));
const Codeblock = loadable(() => import('pages/codeblock'));
const Lotties = loadable(() => import('pages/lottie'));
const DraftEditor = loadable(() => import('modules/draftEditor'));
const ImageUploader = loadable(() => import('pages/imageUploader'));
const PostCode = loadable(() => import('pages/postcode'));
const Admin = loadable(() => import('pages/testpage'));

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
                        <Route path="/admin" exact component={Admin} />
                        <Route path="/csv" exact component={Csv} />
                        <Route path="/codeblock" exact component={Codeblock} />
                        <Route
                            path="/editor/draftjs"
                            exact
                            component={DraftEditor}
                        />
                        <Route path="/lottie" exact component={Lotties} />
                        <Route
                            path="/image-uploader"
                            exact
                            component={ImageUploader}
                        />
                        <Route path="/postcode" exact component={PostCode} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    );
};

export default Root;
