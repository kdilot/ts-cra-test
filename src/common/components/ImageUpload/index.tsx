import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Text, Thumb, Img, ThumbsContainer } from './styles';

const ImageUpload: React.FC = () => {
    const [files, setFiles] = useState([]);
    // const [base64Files, setBaseFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxSize: 1024 * 1024 * 5,
        multiple: true,
        onDrop: (acceptedFiles: any) => {
            setFiles(
                acceptedFiles.map((file: any) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            );
            // acceptedFiles.map((file: any) => blobToBase64(file));
        },
        onDropRejected: () => {
            console.log('사이즈 제한');
        },
    });

    const blobToBase64 = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
            Object.assign(file, {
                base64: event.target.result,
            });
        };
    };

    useEffect(() => {
        if (files.length > 0) {
            console.log(files, 1);
        }
    }, [files]);

    const thumbs = files.map((file: any) => (
        <Thumb key={file.name}>
            <a href={file.preview} target="_black">
                <Img src={file.base64} />
            </a>
        </Thumb>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Text>
                    이미지를 드래그 하거나 클릭하세요.
                    <span>(최대 사이즈 5MB)</span>
                </Text>
            </div>
            <ThumbsContainer>{thumbs}</ThumbsContainer>
        </>
    );
};

export default ImageUpload;
