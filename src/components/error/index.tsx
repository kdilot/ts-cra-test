import React from 'react';
import { ErrorContainer, TitleText, SubText } from './styles';

const Error: React.FC = () => {
    return (
        <ErrorContainer>
            <TitleText>404</TitleText>
            <SubText>Not Found</SubText>
        </ErrorContainer>
    );
};

export default Error;
