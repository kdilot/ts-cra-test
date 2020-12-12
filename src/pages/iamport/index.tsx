import React, { useEffect } from 'react';
import { inicisPay, inicisPayInitialize } from 'modules/iamport/inicis';

const Iamport: React.FC = () => {
    useEffect(() => {
        inicisPayInitialize();
    }, []);

    const data = {
        pay_method: 'card',
        merchant_uid: `o${new Date().getTime()}${new Date().getMilliseconds()}`, //  주문번호
        name: '테스트상품', //  상품명 (최대 16자)
        amount: 10, // priceResult.totalGoodsPrice, //  금액
        buyer_email: '', //  구매자 이메일
        buyer_name: '홍길동', //  구매자 이름
        buyer_tel: '01000000000', //  구매자 연락처
        buyer_addr: `서울시 강남구 강남대로 주소테스트`, //  구매자 주소
        buyer_postcode: '01234',
    };

    return <div onClick={() => inicisPay(data)}>아임포트 결제모듈 실행</div>;
};

export default Iamport;
