/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Input, Select, Space, Rate, DatePicker, Button } from 'antd';
import styled from 'styled-components';
import {
    BOARD_TYPE_NAME,
    BOARD_TYPE,
    BOARD_FAQ_TYPE,
    BOARD_FAQ_TYPE_NAME,
} from './global';
import ImageUploader from 'modules/imageUpload/index';
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const BoardWrite: React.FC = () => {
    const [type, setType] = useState<string>('');
    const [subType, setSubType] = useState<string>('');
    const [eventStartDate, setEventStartDate] = useState<string>('');
    const [eventEndDate, setEventEndDate] = useState<string>('');
    const [eventKeyword, setEventKeyword] = useState<string>('');
    const [rate, setRate] = useState<number>(0);
    const [images, setImages] = useState<string[]>([]);

    const onDatePick = (date: any) => {
        if (!date) {
            setEventStartDate('');
            setEventEndDate('');
            return;
        }
        setEventStartDate(date[0]);
        setEventEndDate(date[1]);
    };

    useEffect(() => {
        if (type !== 'faq') {
            setSubType('');
        }
        if (type !== 'event') {
            setEventStartDate('');
            setEventEndDate('');
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
                    {type === 'review' && <Rate onChange={setRate} />}
                    {type === 'event' && (
                        <>
                            <RangePicker
                                format="YYYY-MM-DD"
                                onChange={onDatePick}
                                placeholder={['시작일', '종료일']}
                            />
                            <Input
                                style={{ width: '400px' }}
                                value={eventKeyword}
                                onChange={(e) =>
                                    setEventKeyword(e.target.value)
                                }
                                placeholder="키워드"
                                allowClear={true}
                            />
                        </>
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
                    <ImageUploader
                        withPreview={true}
                        maxFileSize={5}
                        imgExtension={['.jpg', '.jpeg', '.png']}
                        defaultImages={images}
                        limit={10}
                        onChange={(file: File[], data: any[]) =>
                            console.log(file, data)
                        }
                    />
                </Space>
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
