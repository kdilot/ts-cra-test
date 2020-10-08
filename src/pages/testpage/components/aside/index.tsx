import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    styles?: any;
    size?: number;
}

const Aside: React.FC<Props> = ({ styles, size = 200, children }) => {
    const [isHide, setIsHide] = useState<boolean>(false);
    return (
        <Container style={{ width: `${isHide ? 50 : size}px`, ...styles }}>
            {children}
            <HideButtonLayout
                style={{ width: `${isHide ? 50 : size}px` }}
                onClick={() => setIsHide(!isHide)}>
                #HIDE
            </HideButtonLayout>
        </Container>
    );
};

const Container = styled.aside`
    display: flex;
    flex-direction: column;
    position: relative;
    transition: 0.2s all;
    background: rgba(0, 0, 0, 0.3);
`;

const HideButtonLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    transition: 0.2s all;
    background: rgba(0, 0, 0, 0.1);
`;

export default Aside;
