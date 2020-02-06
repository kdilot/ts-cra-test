import styled from 'styled-components';

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: darkgray;
`;

export const StyleS = styled.span`
    display: flex;
    justify-content: center;
    margin: 0;
`;

export const TitleText = styled(StyleS)`
    font-size: 8rem;
    font-weight: bold;
`;

export const SubText = styled(StyleS)`
    font-size: 2rem;
`;
