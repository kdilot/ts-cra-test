import React, { useState, useEffect } from 'react';
import { Content } from './styles';
import styled from 'styled-components';
import { Test } from 'api/test';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import Clipboard from 'react-clipboard.js';

// const Editor = loadable(() => import('common/components/Editor'));
const ARRAY = [
    'tliz',
    'triz company',
    'trizcompany',
    'tliz com',
    '트리즈',
    '트리',
    '투리즈투리즈',
    '트리즈컴퍼니',
    '트리즈 컴퍼니',
];

const Home: React.FC = () => {
    const [list, setList] = useState<any>(ARRAY);
    const [value, setValue] = useState('');

    const onChange = (e: any) => {
        if (e.target.value.trim()) {
            setValue(e.target.value);
            setList(
                ARRAY.filter((text) => {
                    return text.includes(e.target.value);
                }),
            );
        } else {
            setValue('');
        }
    };

    useEffect(() => {
        Test();
    });

    return (
        <>
            <Content>
                <Input>
                    <input onChange={(e) => onChange(e)}></input>
                </Input>
                <List>
                    {list.map((m: any, i: number) => {
                        const split = m.split(value);
                        return value ? (
                            <div key={i}>
                                {split[0]}
                                <Special>{value}</Special>
                                {split[1]}
                            </div>
                        ) : (
                            <div key={i}>{m}</div>
                        );
                    })}
                </List>
                <Share>
                    <TwitterShareButton url={'http://naver.com'}>
                        <Box>T</Box>
                    </TwitterShareButton>
                    <FacebookShareButton url={'http://naver.com'}>
                        <Box>F</Box>
                    </FacebookShareButton>
                    <Clipboard data-clipboard-text="http://naver.com">
                        <Box>URL</Box>
                    </Clipboard>
                    <button
                        onClick={() =>
                            window.open(
                                'https://story.kakao.com/share?url=https://naver.com',
                                '_blank',
                                `width=550 height=400 left=${
                                    (window.screen.width - 550) / 2
                                } top=${(window.screen.height - 400) / 2}`,
                            )
                        }>
                        <Box>TEST</Box>
                    </button>
                </Share>
            </Content>
        </>
    );
};

const Input = styled.div`
    height: 50px;
`;

const List = styled.div`
    height: 400px;
`;

const Special = styled.span`
    color: red;
`;

const Share = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    button ~ button {
        margin-left: 5px;
    }
`;

const Box = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: none;
`;

export default Home;
