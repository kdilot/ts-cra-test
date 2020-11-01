import React, { useState, useEffect } from 'react';
import keywordList from './keyword.json';
import { Input } from 'antd';
import styled from 'styled-components';

interface Props {
    onClick: (value: string) => void;
}

const Search: React.FC<Props> = ({ onClick }) => {
    const [list, setList] = useState<any[]>([]);
    const [keyword, setKeyword] = useState<string>('');

    const onLiveKeyword = (text: string) => {
        const index = text.indexOf(keyword);
        const view = `${text.slice(
            0,
            index,
        )}<span>${keyword}</span>${text.slice(index + keyword.length)}`;
        return { text, view };
    };

    useEffect(() => {
        if (!keyword.trim()) {
            setList([]);
            return;
        }
        const result = keywordList
            .filter((data: string) => data.indexOf(keyword) !== -1)
            .map((data: string) => onLiveKeyword(data));
        setList(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <Container>
            <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {list.map((word: any, index: number) => (
                <TextListLayout
                    key={index}
                    onClick={() => onClick(word.text)}
                    dangerouslySetInnerHTML={{ __html: word.view }}
                />
            ))}
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    justify-content: flex-start;
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
