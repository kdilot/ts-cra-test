// React.lazy & Suspense

/*
import React, { useState, Suspense } from 'react';
const SplitMe = React.lazy(() => import('common/components/SplitMe'));

const App: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(true);
    };
    return (
        <>
            <div onClick={onClick}>Hello React</div>
            <Suspense fallback={<div>loading...</div>}>
                {visible && <SplitMe />}
            </Suspense>
        </>
    );
};

export default App;
*/

// Loadable Component

import React, { useState } from 'react';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('common/components/SplitMe'), {
    fallback: <div>loading...</div>,
});

const App: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(true);
    };
    return (
        <>
            <div onClick={onClick}>Hello React</div>
            {visible && <SplitMe />}
        </>
    );
};

export default App;
