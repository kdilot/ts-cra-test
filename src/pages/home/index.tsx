import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <Container>
            <Link to="/lottie">Lottie 이미지</Link>
            <Link to="/editor/draftjs">Draftjs 에디터</Link>
            <Link to="/codeblock">코드 Preview</Link>
            <Link to="/csv">CSV 다운로드</Link>
            <Link to="/image-uploader">이미지 업로더</Link>
            <Link to="/postcode">KAKAO 주소검색</Link>
            <Link to="/admin">어드민 테스트</Link>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 500px;
    justify-content: flex-start;
    align-items: center;
    a {
        width: 250px;
        padding: 5px 10px;
    }
`;

export default Home;
