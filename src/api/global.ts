import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${''}`;

export const API = axios.create({
    baseURL: `https://0l434688gb.execute-api.ap-northeast-2.amazonaws.com/dev/app/admin/users`,
});
