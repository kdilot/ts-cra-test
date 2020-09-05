import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { code } from 'components/codeblock/code';
import styled from 'styled-components';

const Codeblock: React.FC = () => (
    <Container>
        <CodeBlock
            language={'jsx'}
            text={code}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={true}
        />
    </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 600px;
    margin: 0 auto;
    overflow: auto;
`;

export default Codeblock;
