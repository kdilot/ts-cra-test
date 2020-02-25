import styled from 'styled-components';

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5fcff;
    color: #62c0ea;
    padding: 3rem;
    height: 10rem;
    border-radius: 4px;
    border: 1px solid #a5d8ef;

    span {
        margin-top: 0.5rem;
    }
`;

export const ThumbsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
`;

export const Thumb = styled.div`
    display: inline-flex;
    border-radius: 2;
    background: #f5fcff;
    border: 1px solid #a5d8ef;
    margin-bottom: 8;
    margin-right: 8;
    max-width: 300px;
    height: auto;
    padding: 4px;
    border-radius: 4px;
    margin-bottom: 5px;
    & ~ & {
        margin-left: 5px;
    }
`;

export const Img = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
`;
