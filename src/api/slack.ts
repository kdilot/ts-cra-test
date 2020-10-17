import axios from 'axios';

export const ApiSlackMessageBot = async (text: string, channel: string) => {
    axios.defaults.headers.common[
        'Authorization'
    ] = `Bearer xoxb-1414837188823-1429583655154-o8g8i8VIwjj0tNyNO82Mbdos`;
    const rs = await axios
        .post(
            `https://cors-anywhere.herokuapp.com/https://slack.com/api/chat.postMessage`,
            {
                text,
                channel,
            },
        )
        .then((res) => {
            console.log(res);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });

    return rs;
};
