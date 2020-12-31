import { testFunction } from 'common/functions';
import React from 'react';
import styled from 'styled-components';

interface Props {
    vertical?: boolean;
    size?: number;
}

const Divider: React.FC<Props> = ({
    children,
    vertical = false,
    size = 5,
}: any) => {
    // return <Container>{children}</Container>;
    return (
        <Container className={vertical && 'vertical'}>
            {children.length > 0
                ? children.map((list: any, index: number) => (
                      <ChildrenLayout
                          key={index}
                          className={vertical && 'vertical'}
                          size={size}>
                          {list}
                      </ChildrenLayout>
                  ))
                : children}
        </Container>
    );
};

const Test: React.FC = () => {
    testFunction('?name=eufhwke&age=50&address=teuseaskdjfhlask');
    return (
        <div style={{ width: '200px', background: 'yellow' }}>
            <Divider size={10}>
                <div>fist</div>
                <div>fist</div>
                <div>fist</div>
                <div>fist</div>
            </Divider>
        </div>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &.vertical {
        flex-direction: column;
    }
`;

const ChildrenLayout = styled.div<any>`
    & ~ & {
        margin-left: ${(props: any) => `${props.size}px`};
        &.vertical {
            margin-top: ${(props: any) => `${props.size}px`};
            margin-left: 0;
        }
    }
    padding: 5px 20px;
    background: rgba(0, 0, 0, 0.1);
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Test;
