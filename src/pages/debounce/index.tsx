import React from 'react';
import { debounce } from 'lodash';
import { Input } from 'antd';
import styled from 'styled-components';

function App() {
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setText(value);
        somthingFunc();
    };

    const onDebounceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debounceSomethingFunc(e.target.value);
    };

    const somthingFunc = () => {
        console.log('called somthingFunc');
    };

    const debounceSomethingFunc = debounce((value: any) => {
        setText2(value);
        console.log('called debounceSomethingFunc');
    }, 200);

    return (
        <div>
            <InputLayout>
                <span style={{ width: '100px', marginRight: 16 }}>Default</span>
                <Input onChange={onChange} />
            </InputLayout>
            <TextLayout>{text}</TextLayout>
            <InputLayout>
                <span style={{ width: '100px', marginRight: 16 }}>
                    Debounce
                </span>
                <Input onChange={onDebounceChange} />
            </InputLayout>
            <TextLayout>{text2}</TextLayout>
        </div>
    );
}

const InputLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
`;

const TextLayout = styled.div`
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
`;

export default App;
