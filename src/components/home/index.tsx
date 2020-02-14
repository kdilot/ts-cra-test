import React from 'react';
import { Header, Content, Footer } from './styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loadable from '@loadable/component';

const Editor = loadable(() => import('common/components/Editor'));

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>메인 페이지</title>
            </Helmet>
            <Header>
                <Link to="/page/home">{process.env.REACT_APP_GOOGLE_GA} </Link>
            </Header>
            <Header>
                <Link to="/page/content">Content </Link>
            </Header>
            <Content>
                {/* <FlatList
                    data={DATA}
                    dataSplitter={<DividerLayout />}
                    headerSplitter={true}
                    bottomSplitter={true}
                /> */}
                <Editor />
            </Content>
            <Footer>
                <Link to="/page/footer">Footer </Link>
            </Footer>
        </>
    );
};

export default Home;
