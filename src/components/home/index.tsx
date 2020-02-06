import React from 'react';
import { Header, Content, Footer } from './styles';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <Header>
                <Link to="/page/home">Header </Link>
            </Header>

            <Content>
                <Link to="/page/content">Content </Link>
            </Content>

            <Footer>
                <Link to="/page/footer">Footer </Link>
            </Footer>
        </>
    );
};

export default Home;
