import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { code } from 'components/codeblock/code';
import styled from 'styled-components';

const Codeblock: React.FC = () => (
    <Container>
        <LeftLayout className="layout">
            <Example>sdf</Example>
            <Props>sdf</Props>
        </LeftLayout>
        <RightLayout className="layout">
            <CodeBlock
                language={'jsx'}
                text={code}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
            />
        </RightLayout>
    </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: 600px;
    margin: 0 auto;
    padding: 1rem;
    background: #cbae82;
    flex-wrap: wrap;

    .layout ~ .layout {
        margin-left: 1rem;
    }
`;

const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 4px;
`;

const LeftLayout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const RightLayout = styled(Box as any)`
    display: flex;
    flex: 1;
    overflow: auto;
    height: 100%;
    /* .layout {
        span:first-of-type {
            &::-webkit-scrollbar {
                height: 6px;
            }

            &::-webkit-scrollbar-track {
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 3px;
                background: #aaa;
            }
            &::-webkit-scrollbar-button {
                width: 0;
                height: 0;
            }
        }
    } */
`;

const Example = styled(Box as any)`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: red;
`;

const Props = styled(Box as any)`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 1rem;
    background: purple;
`;

export default Codeblock;
