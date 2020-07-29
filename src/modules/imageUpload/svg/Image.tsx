import React from 'react';

interface Props {
    color?: string;
}

const Image: React.FC<Props> = ({ color }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32">
            <path
                fill={color || '#1890ff'}
                d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
            <path
                fill={color || '#1890ff'}
                d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
            <path
                fill={color || '#1890ff'}
                d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
        </svg>
    );
};

export default Image;
