import React, { useState } from 'react';
import ImageUploader from 'modules/imageUpload/index';
import styled from 'styled-components';

const ImageUpload: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    return (
        <Container>
            <ImageUploader
                withPreview={true}
                maxFileSize={5}
                imgExtension={['.jpg', '.jpeg', '.png']}
                defaultImages={images}
                limit={10}
                onChange={(file: File[], base: any[]) => setImages(base)}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 425px;
    background: rgba(0, 0, 0, 0.05);
`;

export default ImageUpload;
