export const BOARD_TYPE = ['notice', 'direct', 'faq', 'review', 'event'];
export const BOARD_TYPE_NAME = {
    notice: '공지사항',
    direct: '1:1문의',
    faq: 'FAQ',
    review: '리뷰',
    event: '이벤트',
};

export const BOARD_FAQ_TYPE = ['use', 'order', 'pay', 'etc'];
export const BOARD_FAQ_TYPE_NAME = {
    use: '제품사용',
    order: '주문/결제/배송',
    pay: '취소/환불/교환/반품',
    etc: '기타',
};

export const BOARD_CONTENT_TYPE = {
    notice: { useContent: false, useImages: true },
    direct: { useContent: true, useImages: true },
    faq: { useContent: true, useImages: false },
    review: { useContent: true, useImages: true },
    event: { useContent: false, useImages: true },
};
