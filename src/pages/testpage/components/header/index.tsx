import React from 'react';
import styled from 'styled-components';

interface Props {
    styles?: any;
}

const Header: React.FC<Props> = ({ styles, children }) => {
    return <Container style={{ ...styles }}>{children}</Container>;
};

const Container = styled.header`
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    background: rgba(0, 0, 0, 0.2);
`;

export default Header;
