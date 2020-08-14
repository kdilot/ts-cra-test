import React from 'react';
import { Test } from 'api/test';

const Home: React.FC = () => {
    Test().then();
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
            HOME
        </div>
    );
};

export default Home;
