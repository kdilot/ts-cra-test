import { API } from './global';

export const Test = async () => {
    return await API.get('', {})
        .then((res: any) => {
            return console.log(res);
        })
        .catch((err) => {
            return console.log(err.response);
        });
};
