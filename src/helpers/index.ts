export const downloadContent = (url: string, path: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = path;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
};