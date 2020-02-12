import React from 'react';
import { ErrorContainer, TitleText, SubText } from './styles';
import { Helmet } from 'react-helmet-async';

const Error: React.FC = () => {
    return (
        <ErrorContainer>
            <Helmet>
                <title>에러 페이지</title>
            </Helmet>
            <TitleText>404</TitleText>
            <SubText>Not Found</SubText>
        </ErrorContainer>
    );
};

export default Error;
