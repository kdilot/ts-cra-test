import axios from 'axios';

export const Test = async () => {
    return await axios
        .get(
            'https://openapi.naver.com/v1/search/shop.json&query=test&display=10',
            {
                headers: {
                    'X-Naver-Client-Id': 'Wy87tIfaIeqQIzd_rC0V',
                    'X-Naver-Client-Secret': 'FwR5RniWNY',
                },
            },
        )
        .then((res: any) => {
            return console.log(res);
        })
        .catch((err) => {
            return console.log(err);
        });
};
