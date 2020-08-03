import React, { useState, useEffect } from 'react';
import './index.css';
import ExifOrientationImg from 'react-exif-orientation-img';
import Image from './svg/Image';
import Trash from './svg/Trash';

interface Props {
    defaultImages?: string[];
    imgExtension?: string[];
    maxFileSize?: number;
    limit?: number;
    isSingleImage?: boolean;
    withPreview?: any;
    name?: string;
    accept?: string;
    onChange?: (files: File[], base: string[]) => void;
    style?: object;
    buttonStyles?: object;
    errorClassName?: string;
    errorStyle?: object;
    fileSizeErrorTitle?: string;
    fileTypeErrorTitle?: string;
    errorContainerStyle?: object;
    isAndroid?: boolean;
}

const ERROR = {
    NOT_SUPPORTED_EXTENSION: 'NOT_SUPPORTED_EXTENSION',
    FILESIZE_TOO_LARGE: 'FILESIZE_TOO_LARGE',
};

const ImageUpload: React.FC<Props> = ({
    defaultImages = [],
    imgExtension = ['.jpg', '.jpeg', '.gif', '.png'],
    maxFileSize = 1,
    limit = 0,
    isSingleImage = false,
    name,
    accept = 'image/*',
    withPreview = false,
    onChange = () => {},
    style = {},
    buttonStyles = {},
    errorStyle = {},
    fileSizeErrorTitle = '제한 사이즈를 초과했습니다',
    fileTypeErrorTitle = '지원하지 않는 확장자입니다',
    errorContainerStyle = {},
    isAndroid = false,
}) => {
    const [pictures, setPictures] = useState<any[]>([...defaultImages]);
    const [files, setFiles] = useState<any[]>(
        new Array(defaultImages.length).fill(null),
    );
    const [fileErrors, setFileErrors] = useState<any[]>([]);
    const inputElement = React.useRef<HTMLInputElement>(null);

    const hasExtension = (fileName: string) => {
        const pattern =
            '(' + imgExtension.join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    };

    const onDropFile = (e: any) => {
        const dropFiles = e.target.files;
        const allFilePromises: any = [];
        const fileErrors: object[] = [];

        // Iterate over all uploaded files
        for (let i = 0; i < dropFiles.length; i++) {
            let file = dropFiles[i];
            let fileError = {
                name: file.name,
            };
            // Check for file extension
            if (!hasExtension(file.name)) {
                fileError = Object.assign(fileError, {
                    type: ERROR.NOT_SUPPORTED_EXTENSION,
                });
                fileErrors.push(fileError);
                continue;
            }
            // Check for file size
            if (file.size > maxFileSize * 1048576) {
                fileError = Object.assign(fileError, {
                    type: ERROR.FILESIZE_TOO_LARGE,
                });
                fileErrors.push(fileError);
                continue;
            }

            allFilePromises.push(readFile(file));
        }

        setFileErrors(fileErrors);
        setTimeout(() => {
            setFileErrors([]);
        }, 1500);

        Promise.all(allFilePromises).then((newFilesData: any) => {
            const dataURLs = isSingleImage ? [] : pictures.slice();
            const singleFile = isSingleImage ? [] : files.slice();

            newFilesData.forEach((newFileData: any) => {
                dataURLs.push(newFileData.dataURL);
                singleFile.push(newFileData.file);
            });

            setPictures(limit > 0 ? dataURLs.slice(0, limit) : dataURLs);
            setFiles(limit > 0 ? singleFile.slice(0, limit) : singleFile);
        });
    };

    const onUploadClick = (e: any) => {
        e.target.value = null;
    };

    const readFile = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e: any) {
                // Add the file name to the data URL
                let dataURL = e.target.result;
                resolve({ file, dataURL });
            };

            reader.readAsDataURL(file);
        });
    };

    const removeImage = (picture: any) => {
        const removeIndex = pictures.findIndex((e) => e === picture);
        const filteredPictures = pictures.filter(
            (e, index) => index !== removeIndex,
        );
        const filteredFiles = files.filter((e, index) => index !== removeIndex);

        setPictures(filteredPictures);
        setFiles(filteredFiles);
    };

    const renderErrors = () => {
        return fileErrors.map((fileError, index) => {
            return (
                <div className="errorMessage" key={index} style={errorStyle}>
                    {/* * {fileError.name}{' '} */}
                    {fileError.type === ERROR.FILESIZE_TOO_LARGE
                        ? fileSizeErrorTitle
                        : fileTypeErrorTitle}
                </div>
            );
        });
    };

    const renderPreview = () => {
        return <>{renderPreviewPictures()}</>;
    };

    const renderPreviewPictures = () => {
        return pictures.map((picture, index) => {
            return (
                <div key={index} className="file-preview-container">
                    <div
                        className="file-remove"
                        onClick={() => removeImage(picture)}>
                        <Trash color={'#d0dbe4'} />
                    </div>
                    {isAndroid ? (
                        <ExifOrientationImg
                            src={picture}
                            className="file-image"
                            alt="preview"
                        />
                    ) : (
                        <img
                            src={picture}
                            className="file-image"
                            alt="preview"
                        />
                    )}
                </div>
            );
        });
    };

    const triggerFileUpload = () => {
        inputElement.current?.click();
    };

    useEffect(() => {
        onChange(files, pictures);
    }, [onChange, files, pictures]);

    return (
        <div className="container" style={style}>
            <div className="files-container">
                {withPreview && renderPreview()}
                <div className="file-button-container">
                    <div
                        className="file-button"
                        style={buttonStyles}
                        onClick={triggerFileUpload}>
                        <Image color={'#d0dbe4'} />
                    </div>
                    <input
                        type="file"
                        ref={inputElement}
                        name={name}
                        multiple={!isSingleImage}
                        onChange={onDropFile}
                        onClick={onUploadClick}
                        accept={accept}
                    />
                </div>
            </div>
            <div className="error-container" style={errorContainerStyle}>
                {renderErrors()}
            </div>
        </div>
    );
};

export default ImageUpload;
