import React from 'react';
import ImageUploader from 'modules/imageUpload/index';

const Home: React.FC = () => {
    return (
        <ImageUploader
            // buttonStyles={'TEST'}
            buttonText={'TEST'}
            withIcon={false}
            withLabel={false}
            withPreview={true}
            maxFileSize={5242880 * 10}
            imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
            onChange={(e) => console.log(e)}
        />
    );
};

export default Home;
