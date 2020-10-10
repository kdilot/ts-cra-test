import React from 'react';
import { Header, Section, Footer, Aside } from 'pages/testpage/components';
import styled from 'styled-components';

const Test: React.FC = () => {
    return (
        <Container>
            <Section>
                <Header>#THIS IS HEADER</Header>
                <Section direction="row">
                    <Aside>#MENU</Aside>
                    <Section></Section>
                </Section>
                <Footer>#THIS IS FOOTER</Footer>
            </Section>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
`;

export default Test;
