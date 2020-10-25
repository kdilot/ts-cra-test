import React, { useState, useEffect } from 'react';
import keywordList from './keyword.json';
import { Input } from 'antd';
import styled from 'styled-components';

const Search: React.FC = () => {
    const [keyword, setKeyword] = useState<any>('');
    const [list, setList] = useState<any[]>([]);

    const onLiveKeyword = (word: string) => {
        const index = word.indexOf(keyword);
        const result = `${word.slice(
            0,
            index,
        )}<span>${keyword}</span>${word.slice(index + keyword.length)}`;
        return result;
    };

    useEffect(() => {
        if (!keyword.trim()) {
            setList([]);
            return;
        }
        const result = keywordList
            .filter((data) => data.indexOf(keyword) !== -1)
            .map((data) => onLiveKeyword(data));
        setList(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <Container>
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {list.map((word: string, index: number) => (
                <TextListLayout
                    key={index}
                    dangerouslySetInnerHTML={{ __html: word }}
                />
            ))}
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
    width: 100%;
    span {
        color: red;
    }
`;

export default Search;
