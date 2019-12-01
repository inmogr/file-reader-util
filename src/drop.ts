import { readFileAsArrayBuffer, readFileAsDataURL, readFileAsText } from "./readers";
import { FileInputDropEvent, HandleFileInputAsArrayBuffer, HandleFileInputAsDataURL, HandleFileInputAsText } from "./types";

const handleFileInputDrop = async (event?: FileInputDropEvent) => {
    // just safety check
    if (event === undefined) {
        return null;
    }

    const { dataTransfer } = event;
    // just safety check
    if (dataTransfer === undefined || dataTransfer === null) {
        return null;
    }

    const { files } = dataTransfer;
    // just safety check
    if (files.length < 1) {
        return null;
    }

    return files;
};

export const handleFileInputDropAsArrayBuffer = async (event?: FileInputDropEvent) => {
    const files = await handleFileInputDrop(event);
    if (files === null) {
        return null;
    }

    const result: HandleFileInputAsArrayBuffer[] = [];
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        try {
            const data = await readFileAsArrayBuffer(file);
            if (data === null) {
                // if it fails to read the file then it is considered as error
                return null;
            }
            result.push({ file, data });
        } catch (error) {
            return null;
        }
    }

    return result;
};

export const handleFileInputDropAsDataURL = async (event?: FileInputDropEvent) => {
    const files = await handleFileInputDrop(event);
    if (files === null) {
        return null;
    }

    const result: HandleFileInputAsDataURL[] = [];
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        try {
            const data = await readFileAsDataURL(file);
            if (data === null) {
                // if it fails to read the file then it is considered as error
                return null;
            }
            result.push({ file, data });
        } catch (error) {
            return null;
        }
    }

    return result;
};

export const handleFileInputDropAsText = async (event?: FileInputDropEvent) => {
    const files = await handleFileInputDrop(event);
    if (files === null) {
        return null;
    }

    const result: HandleFileInputAsText[] = [];
    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        try {
            const data = await readFileAsText(file);
            if (data === null) {
                // if it fails to read the file then it is considered as error
                return null;
            }
            result.push({ file, data });
        } catch (error) {
            return null;
        }
    }

    return result;
};
