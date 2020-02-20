import styled from 'styled-components';

export const Wrapper = styled.button`
    text-decoration: none;
    border: none;
    width: 200px;
    height: 50px;
    background: black;
    color: white;
    outline: none;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.2s linear;

    & + & {
        margin-top: 10px;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.85);
    }
`;
