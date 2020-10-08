import React from 'react';
import styled from 'styled-components';

interface Props {
    styles?: any;
    direction?: 'row' | 'column';
}

const Section: React.FC<Props> = ({
    styles,
    direction = 'column',
    children,
}) => {
    return (
        <Container style={{ flexDirection: direction, ...styles }}>
            {children}
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: rgba(0, 0, 0, 0.05);
`;

export default Section;
