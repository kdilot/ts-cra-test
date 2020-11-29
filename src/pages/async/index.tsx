/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

const Async: React.FC = () => {
    const timer = async (time: number) => {
        const rs = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                console.log('TIMER CALLED', time);
            }, time);
        });
        return rs;
    };

    const func = async () => {
        console.log(new Date());
        const rs = await timer(1000);
        await timer(1500);
        await timer(2000);

        if (rs) {
            timer(1500);
        }
    };

    useEffect(() => {
        func();
    }, []);

    return <div>sdf</div>;
};

export default Async;
