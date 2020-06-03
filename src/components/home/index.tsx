import React, { useEffect, useState } from 'react';
import { Content } from './styles';
import { img as testImg } from './test';

// const Editor = loadable(() => import('common/components/Editor'));
const Home: React.FC = () => {
    const [newfile, setFiles] = useState('');
    const rotateImage: any = async (base64: any) => {
        const filename = await new Promise(function (resolve, reject) {
            let image = new Image();
            image.src = base64;
            image.onload = function () {
                let resizedDataUrl = rotateResizeImage(image, 0.7);
                resolve(resizedDataUrl);
            };
        });
        return filename;
    };
    const resize: any = async (
        base64: any,
        maxWidth: number,
        maxHeight: number,
        orientation: number,
    ) => {
        const filename = await new Promise(function (resolve, reject) {
            let image = new Image();
            image.src = base64;
            image.onload = function () {
                let resizedDataUrl = resizeImage(
                    image,
                    maxWidth,
                    maxHeight,
                    0.7,
                    orientation,
                );
                resolve(resizedDataUrl);
            };
            // let reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.onload = function (event: any) {
            //     let dataUrl = event.target.result;
            //     console.log(dataUrl);
            //     let image = new Image();
            //     image.src = dataUrl;
            //     image.onload = function () {
            //         let resizedDataUrl = resizeImage(
            //             image,
            //             maxWidth,
            //             maxHeight,
            //             0.7,
            //         resolve(resizedDataUrl);
            //     };
            // };
        });
        return filename;
    };
    const resizeImage = (
        image: any,
        maxWidth: number,
        maxHeight: number,
        quality: number,
        orientation: number,
    ) => {
        let canvas = document.createElement('canvas');

        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round((width * maxHeight) / height);
                height = maxHeight;
            }
        }

        // if (orientation >= 5 && orientation <= 8) {
        //     canvas.width = 90 % 180 === 0 ? width : height;
        //     canvas.height = 90 % 180 === 0 ? height : width;
        // } else {
        // }
        canvas.width = width;
        canvas.height = height;

        let ctx: any = canvas.getContext('2d');

        ctx.save();
        // if (orientation >= 5 && orientation <= 8) {
        //     ctx.translate(canvas.width / 2, canvas.height / 2);
        //     ctx.rotate((90 * Math.PI) / 180);
        //     ctx.drawImage(image, image.width / -2, image.height / -2);
        // } else {
        // }
        ctx.drawImage(image, 0, 0, width, height);
        ctx.restore();
        return canvas.toDataURL('image/jpeg', quality);
    };
    const rotateResizeImage = (image: any, quality: number) => {
        let canvas = document.createElement('canvas');

        let width = image.width;
        let height = image.height;

        canvas.width = 90 % 180 === 0 ? width : height;
        canvas.height = 90 % 180 === 0 ? height : width;

        let ctx: any = canvas.getContext('2d');

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((90 * Math.PI) / 180);
        ctx.drawImage(image, image.width / -2, image.height / -2);
        ctx.restore();
        return canvas.toDataURL('image/jpeg', quality);
    };

    const start = async () => {
        const test = await rotateImage(testImg);
        console.log(test);
        const file = await resize(test, 480, 320, -1);
        setFiles(file);
    };

    useEffect(() => {
        start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Content>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <img src={testImg} alt="asdf" />
                    <img src={newfile} alt="asdf" />
                </div>
            </Content>
        </>
    );
};

export default Home;
