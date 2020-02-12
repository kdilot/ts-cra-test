import React from 'react';
import ReactPlayer from 'react-player';

const Player: React.FC = () => {
    return (
        <ReactPlayer
            url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
            // url="https://www.facebook.com/facebook/videos/10153231379946729/"
            // playing
            controls
            width={'100%'}
            height={'100%'}
        />
    );
};

export default Player;
