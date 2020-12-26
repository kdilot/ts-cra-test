export const testFunction = (url: string) => {
    const slice = url.slice(1);
    console.log(Object.fromEntries(new URLSearchParams(slice)));
    return Object.fromEntries(new URLSearchParams(slice));
};
