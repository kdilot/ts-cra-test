import React, { useState, useEffect } from 'react';
import { Content } from './styles';
import styled from 'styled-components';
import { Test } from 'api/test';

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

    // useEffect(() => {
    //     Test();
    // });

    return (
        <>
            <Content>
                {/* <FlatList
                    data={DATA}
                    dataSplitter={<DividerLayout />}
                    headerSplitter={true}
                    bottomSplitter={true}
                /> */}
                {/* <Editor /> */}
                {/* <Button text={'Download'} />
                <Button text={'Test'} />
                <Button text={'Button'} /> */}
                {/* <ImageUpload /> */}
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

export default Home;
