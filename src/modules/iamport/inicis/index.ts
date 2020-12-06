//  <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
//  <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.4.js"></script>

declare global {
    interface Window {
        INIStdPay: any;
        IMP: any;
    }
}

export const inicisPayInitialize = () => {
    return window.IMP.init(process.env.REACT_APP_IAMPORT_KEY);
};

export const inicisPay = (data: any) => {
    return new Promise((resolve, reject) => {
        // success : true | false   성공실패여부
        // error_msg    오류메시지

        if (
            !data.pay_method ||
            !data.merchant_uid ||
            !data.amount ||
            !data.buyer_tel
        ) {
            // pay_method, merchant_uid, amount, buyer_tel 필수요소 체크
            resolve({
                succees: false,
                local: true, //  필수값 오류 체크를 위한 항목
                error_msg: '결제에 필요한 정보가 부족합니다',
            });
        }

        window.IMP.request_pay(
            {
                // param
                pg: 'html5_inicis', //  결제모듈(이니시스)
                pay_method: data.pay_method || 'card', //  결제수단 (신용카드 : card, 실시간계좌이체 : trans, 가상계좌 : vbank)
                merchant_uid: data.merchant_uid, //  주문번호
                name: data.name.slice(0, 16), //  상품명 (최대 16자)
                amount: data.amount, //  수량
                buyer_email: data.buyer_email, //  구매자 이메일
                buyer_name: data.buyer_name, //  구매자 이름
                buyer_tel: data.buyer_tel, //  구매자 연락처
                buyer_addr: data.buyer_addr, //  구매자 주소
                buyer_postcode: data.buyer_postcode, //  구매자 우편번호
            },
            (res: any) => {
                //  return obejct with success
                resolve(res);
            },
        );
    });
};
