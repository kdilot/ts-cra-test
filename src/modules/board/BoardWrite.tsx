/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Input, Select, Space, Rate, DatePicker, Button, Upload } from 'antd';
import styled from 'styled-components';
import {
    BOARD_TYPE_NAME,
    BOARD_TYPE,
    BOARD_FAQ_TYPE,
    BOARD_FAQ_TYPE_NAME,
} from './global';
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const BoardWrite: React.FC = () => {
    const [type, setType] = useState<string>('');
    const [subType, setSubType] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [rate, setRate] = useState<number>(0);

    const onDatePick = (date: any) => {
        if (!date) {
            setStartDate('');
            setEndDate('');
            return;
        }
        setStartDate(date[0]);
        setEndDate(date[1]);
    };

    useEffect(() => {
        if (type !== 'faq') {
            setSubType('');
        }
        if (type !== 'event') {
            setStartDate('');
            setEndDate('');
        }
        if (type !== 'review') {
            setRate(0);
        }
    }, [type]);

    return (
        <Container>
            <WriteGroup>
                <Space direction="vertical">
                    <Select
                        placeholder="게시판종류"
                        style={{ width: 200 }}
                        onChange={(value: string) => setType(value)}>
                        {BOARD_TYPE.map((list: any, idx: number) => (
                            <Option key={idx} value={list}>
                                {BOARD_TYPE_NAME[list]}
                            </Option>
                        ))}
                    </Select>
                    {type === 'event' && (
                        <RangePicker
                            format="YYYY-MM-DD"
                            onChange={onDatePick}
                            placeholder={['시작일', '종료일']}
                        />
                    )}
                    {type === 'faq' && (
                        <Select
                            placeholder="FAQ종류"
                            style={{ width: 200 }}
                            onChange={(value: string) => setSubType(value)}>
                            {BOARD_FAQ_TYPE.map((list: any, idx: number) => (
                                <Option key={idx} value={list}>
                                    {BOARD_FAQ_TYPE_NAME[list]}
                                </Option>
                            ))}
                        </Select>
                    )}
                    <Input placeholder="제목" allowClear={true} />
                    <TextArea rows={15} placeholder="내용" />
                    <Upload
                        // action="https://f1qwygaf0l.execute-api.ap-northeast-2.amazonaws.com/prod/images"
                        listType="picture-card"
                        multiple={true}
                        // fileList={[
                        //     {
                        //         uid: 'aasdf',
                        //         size: 111,
                        //         type: 'asdfasf',
                        //         name: 'asdasdf',
                        //         thumbUrl:
                        //             'http://www.amipure.com/data/goods/20/06/27/1000000037/1000000037_main_04.png',
                        //     },
                        // ]}
                        onChange={(e) => console.log(e)}>
                        <div>
                            <div className="ant-upload-text">Upload</div>
                        </div>
                    </Upload>
                </Space>
                {type === 'review' && <Rate onChange={setRate} />}
                <ButtonGroup>
                    <Button type="primary">등록</Button>
                </ButtonGroup>
            </WriteGroup>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: lightyellow;
    margin-top: 5rem;
`;

const WriteGroup = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
`;

const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
`;

export default BoardWrite;
