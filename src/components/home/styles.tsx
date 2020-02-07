import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    height: 5vh;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-bottom: 1px solid lightgray;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.div`
    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: center;
    border-top: 1px solid lightgray;
`;

export const DividerLayout = styled.div`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: red;
`;
