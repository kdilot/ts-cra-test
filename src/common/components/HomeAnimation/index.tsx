import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { useMediaQuery } from 'react-responsive';

const HomeAnimation: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Container>
            {isMobile ? (
                <Layout />
            ) : (
                <LayoutContainer>
                    <Layout />
                </LayoutContainer>
            )}
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
    overflow: hidden;
`;

export default HomeAnimation;
