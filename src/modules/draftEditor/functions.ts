import Axios from 'axios';

export const ApiImages = async (file: any) => {
    let formData = new FormData();
    formData.append('image', file);
    return await Axios.post(
        `https://uk6af4rklh.execute-api.ap-northeast-2.amazonaws.com/dev/images`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    )
        .then((res: any) => {
            return res.data.data.link;
        })
        .catch(() => {
            return '';
        });
};

export const fileImageResize = async (file: File) => {
    const result = await new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = async (e: any) => {
            const test = await base64ImageResize(e.target.result);
            resolve(base64toFile(test, 'img'));
        };
        reader.readAsDataURL(file);
    });
    return result;
};

export const base64ImageType = (base64: string) => {
    return base64.split(';')[0].split('/')[1];
};

export const base64ImageResize = async (
    base64: any,
    maxWidth: number = 1920,
    maxHeight: number = 1080,
    quality: number = 0.7,
) => {
    const fileType = base64ImageType(base64);
    const filename = await new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = base64;
        image.onload = () => {
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

            canvas.width = width;
            canvas.height = height;

            let ctx: any = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);

            resolve(canvas.toDataURL(`image/${fileType}`, quality));
        };
    });
    return filename;
};

export const base64toFile = (dataurl: any, fileName: any) => {
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
