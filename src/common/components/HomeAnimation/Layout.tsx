import React, { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import ScrollMenu from '../HomeAnimation/ScrollMenu';

const Layout: React.FC = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollClientHeight, setScrollClientHeight] = useState(0);
    const [isCategoryFixed, setCategoryFixed] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const scrollPosition = useMemo(() => (scrollTop >= 300 ? true : false), [
        scrollTop,
    ]);

    const onScroll = (e: any) => {
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

    // useEffect(() => {
    //     console.log(scrollTop, scrollClientHeight, scrollHeight);
    // }, [scrollTop, scrollHeight, scrollClientHeight]);

    useEffect(() => {
        setCategoryFixed(scrollPosition);
    }, [scrollPosition]);

    return (
        <Container onScroll={onScroll} className={isMobile ? 'isMobile' : ''}>
            <LayoutContainer>
                <HeaderLayout>
                    <HeaderTitle>작은가게 오래가게</HeaderTitle>
                    <HeaderSearch>검색</HeaderSearch>
                </HeaderLayout>
                <BannerLayout>Banner</BannerLayout>
                <CategoryLayout className={isCategoryFixed ? 'active' : ''}>
                    <ScrollMenu />
                </CategoryLayout>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
                <Contents>Contents</Contents>
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
    height: 100%;
    justify-content: center;
    align-items: center;

    &.isMobile {
        /* 스크롤이 안먹음 */
        height: 100vh;
    }
`;

const LayoutContainer = styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;
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
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: white;
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
`;

const CategoryLayout = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: white;
    &.active {
        position: sticky;
        top: 50px;
    }
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
