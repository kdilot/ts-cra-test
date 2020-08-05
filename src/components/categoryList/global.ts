export const CATEGORIES = [
    {
        title: '1차 카테고리 1',
        no: 1,
        children: [
            { title: '2차 카테고리 1', no: 4, children: [] },
            {
                title: '2차 카테고리 2',
                no: 5,
                children: [
                    { title: '3차 카테고리 1', no: 12, children: [] },
                    { title: '3차 카테고리 2', no: 13, children: [] },
                ],
            },
            { title: '2차 카테고리 3', no: 6, children: [] },
        ],
    },
    {
        title: '1차 카테고리 2',
        no: 2,
        children: [
            { title: '2차 카테고리 4', no: 7, children: [] },
            { title: '2차 카테고리 5', no: 8, children: [] },
        ],
    },
    {
        title: '1차 카테고리 3',
        no: 3,
        children: [
            {
                title: '2차 카테고리 6',
                no: 9,
                children: [{ title: '3차 카테고리 3', no: 14, children: [] }],
            },
            { title: '2차 카테고리 7', no: 10, children: [] },
            {
                title: '2차 카테고리 8',
                no: 11,
                children: [{ title: '3차 카테고리 4', no: 15, children: [] }],
            },
        ],
    },
];
