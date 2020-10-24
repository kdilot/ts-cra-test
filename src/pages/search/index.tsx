import React, { useState } from 'react';
import keywordList from './keyword.json';
import { Input } from 'antd';
import styled from 'styled-components';

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState<any>('');
    return (
        <Container>
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <TextListLayout>
                asdfasdf<span>fwew</span>sadf
            </TextListLayout>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    flex-direction: column;
`;

const TextListLayout = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    span {
        color: red;
    }
`;

export default Search;
