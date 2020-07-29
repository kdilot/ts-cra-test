import React, { useState } from 'react';
import ImageUploader from 'modules/imageUpload/index';

const Home: React.FC = () => {
    const [pictures] = useState<any[]>([
        'https://image-uploader-bucket-prod.s3.ap-northeast-2.amazonaws.com/backup/jocad1594358377496748.jpeg',
    ]);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ImageUploader
                style={{ width: '550px' }}
                withPreview={true}
                maxFileSize={5}
                imgExtension={['.jpg', '.jpeg', '.png']}
                defaultImages={pictures}
                limit={10}
                onChange={(file: File[], data: any[]) =>
                    console.log(file, data)
                }
            />
        </div>
    );
};

export default Home;
