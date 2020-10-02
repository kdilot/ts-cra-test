import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const Postcode: React.FC = () => {
    const onCheckAddress = (data: any) => {
        let address: any = {};
        if (data) {
            address.address = data.address || data.jibunAddress;
            address.zonecode = data.zonecode;
        }
        console.log(address);
        return address;
    };

    return (
        <Container>
            <ButtonLayout>닫기</ButtonLayout>
            <ContentsLayout>
                <DaumPostcode
                    onSearch={(e) => console.log(e)}
                    onComplete={onCheckAddress}
                    width={'100%'}
                    height={'100%'}
                    // scriptUrl={
                    //     'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
                    // }
                />
            </ContentsLayout>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%;
    height: 100%; */
    width: 400px;
    height: 600px;
    align-items: flex-start;
`;

const ButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #888;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #dedede;
    box-shadow: 0 1px #dedede;
    cursor: pointer;
`;

const ContentsLayout = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
`;

export default Postcode;
