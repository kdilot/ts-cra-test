import React, { useEffect, useState } from 'react';
import { Content } from './styles';
import { img as testImg } from './test';
import loadImage from 'blueimp-load-image';

// const Editor = loadable(() => import('common/components/Editor'));
const Home: React.FC = () => {
    const [newfile, setFiles] = useState('');
    const base64toFile = (dataurl: any, fileName: any) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        // Edge/IE는 File()을 지원하지 않습니다. https://stackoverflow.com/questions/49890537/javascript-edge-browser-typeerror-function-expected
        // return new Blob([u8arr], fileName, { type: mime});

        return new Blob([u8arr], { type: mime });
    };
    const getImageOrientation = async (file: any) => {
        const orientation = await new Promise(function (resolve, reject) {
            let reader = new FileReader();
            reader.onload = (event: any) => {
                let view = new DataView(event.target.result);

                if (view.getUint16(0, false) !== 0xffd8) resolve(-2);

                let length = view.byteLength,
                    offset = 2;

                while (offset < length) {
                    let marker = view.getUint16(offset, false);
                    offset += 2;

                    if (marker === 0xffe1) {
                        if (
                            view.getUint32((offset += 2), false) !== 0x45786966
                        ) {
                            resolve(-1);
                        }
                        let little =
                            view.getUint16((offset += 6), false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        let tags = view.getUint16(offset, little);
                        offset += 2;

                        for (let i = 0; i < tags; i++)
                            if (
                                view.getUint16(offset + i * 12, little) ===
                                0x0112
                            )
                                resolve(
                                    view.getUint16(offset + i * 12 + 8, little),
                                );
                    } else if ((marker & 0xff00) !== 0xff00) break;
                    else offset += view.getUint16(offset, false);
                }
                resolve(-1);
            };

            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
        });
        return orientation;
    };
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
        const file64 = base64toFile(testImg, 'asdf');
        const ggg = await getImageOrientation(file64);
        const test = await rotateImage(testImg);
        const file = await resize(test, 480, 320, -1);
        setFiles(file);
        const file642 = base64toFile(file, 'asdf');
        const ggg2 = await getImageOrientation(file642);
        console.log(ggg);
        console.log(ggg2);
        loadImage(
            file64,
            (img: any, data: any) => {
                // document.body.appendChild(img);
                console.log(data);
                console.log(data.exif.get('Orientation'));
            },
            { orientation: true, meta: true },
        );
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
                    <img src={testImg} style={{ width: '300px' }} alt="asdf" />
                    <img src={newfile} alt="asdf" />
                </div>
            </Content>
        </>
    );
};

export default Home;
