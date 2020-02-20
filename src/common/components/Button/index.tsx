import React, { useState } from 'react';
import { Wrapper } from './styles';

interface Props {
    text: string;
}

const Button: React.FC<Props> = ({ text }) => {
    const [title] = useState(text);
    // const [progress, setProgress] = useState(false);
    // const [size, setSize] = useState(false);

    // const onClick = () => {
    //     if (!progress && title === text) {
    //         onSize();
    //         setTimeout(() => {
    //             setProgress(true);
    //             setTimeout(() => {
    //                 setProgress(false);
    //             }, 1000);
    //         }, 500);
    //     }
    // };

    // const onSize = () => {
    //     setSize(true);
    //     setTimeout(() => {
    //         setSize(false);
    //     }, 100);
    // };

    // useEffect(() => {
    //     if (progress) setTitle('...');
    //     else {
    //         setTimeout(() => {
    //             setTitle(text);
    //         }, 200);
    //     }
    // }, [progress, text]);

    return <Wrapper onClick={() => null}>{title}</Wrapper>;
};

export default Button;
