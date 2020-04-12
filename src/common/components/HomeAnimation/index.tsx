import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const HomeAnimation: React.FC = () => {
    return (
        <Container>
            <LayoutContainer>
                <Layout />
            </LayoutContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const LayoutContainer = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid black;
    overflow: auto;
`;

export default HomeAnimation;
