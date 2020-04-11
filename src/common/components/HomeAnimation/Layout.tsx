import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Layout: React.FC = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollClientHeight, setScrollClientHeight] = useState(0);
    const [isHeaderFixed, setHeaderFixed] = useState(false);
    const [isCategoryFixed, setCategoryFixed] = useState(false);

    const onScroll = (e: any) => {
        console.log(123123123);
        if (e.target.scrollTop !== scrollTop) {
            setScrollTop(e.target.scrollTop);
        }
        if (e.target.scrollHeight !== scrollHeight) {
            setScrollHeight(e.target.scrollHeight);
        }
        if (e.target.clientHeight !== scrollClientHeight) {
            setScrollClientHeight(e.target.clientHeight);
        }
    };

    useEffect(() => {
        console.log(scrollTop, scrollClientHeight, scrollHeight);
    }, [scrollTop, scrollHeight, scrollClientHeight]);

    useEffect(() => {
        setHeaderFixed(scrollTop > 50 ? true : false);
        setCategoryFixed(scrollTop > 350 ? true : false);
    }, [scrollTop]);

    return (
        <Container onScroll={onScroll}>
            <LayoutContainer className={isHeaderFixed ? 'active' : ''}>
                <HeaderLayout className={isHeaderFixed ? 'active' : ''}>
                    <HeaderTitle>작은가게 오래가게</HeaderTitle>
                    <HeaderSearch>검색</HeaderSearch>
                </HeaderLayout>
                <BannerLayout className={isHeaderFixed ? 'active' : ''}>
                    Banner
                </BannerLayout>
                <CategoryLayout>Category</CategoryLayout>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
            </LayoutContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const LayoutContainer = styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;
    margin-top: 100px;
`;

const HeaderLayout = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
    position: fixed;
    top: 0;

    &.active {
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    font-size: 0.8rem;
`;

const HeaderTitle = styled.div`
    font-weight: bold;
`;

const BannerLayout = styled.div`
    width: 100%;
    height: 300px;
    background: lightyellow;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
        background: red;
    }
`;

const CategoryLayout = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const Contents = styled.div`
    margin: 1rem;
    border: 1px solid black;
    height: 200px;
    background: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Layout;
