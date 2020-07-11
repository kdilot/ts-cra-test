import React from 'react';
import styled from 'styled-components';

const Alert: React.FC = () => {
    return <Container>123</Container>;
};

const Container = styled.div`
    position: sticky;
    top: 10;
    right: 30px;
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #faa;
    margin-bottom: 10px;
`;

export default Alert;
