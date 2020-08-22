import React, { useState } from 'react';
import Lottie from 'react-lottie';
import test from './keep_default.json';

const Lotties: React.FC = () => {
    const [pause, setPause] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: test,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const onAction = () => {
        setPause(true);
        setTimeout(() => {
            setPause(false);
        }, 1000);
    };
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '500px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <button onClick={onAction}>Pause</button>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={false}
                isPaused={pause}
            />
        </div>
    );
};

export default Lotties;
