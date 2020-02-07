import React from 'react';
import { Header, Content, Footer, DividerLayout } from './styles';
import { Link } from 'react-router-dom';
import { FlatList } from 'common';

const DATA = new Array(10).fill('AAA');

const Home: React.FC = () => {
    return (
        <>
            <Header>
                <Link to="/page/home">Header </Link>
            </Header>
            <Header>
                <Link to="/page/content">Content </Link>
            </Header>
            <Content>
                <FlatList data={DATA} dataSpliter={<DividerLayout />} />
            </Content>
            <Footer>
                <Link to="/page/footer">Footer </Link>
            </Footer>
        </>
    );
};

export default Home;
