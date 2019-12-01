import { readFileAsArrayBuffer, readFileAsDataURL, readFileAsText } from "./readers";
import { FileInputSelectionEvent, HandleFileInputAsArrayBuffer, HandleFileInputAsDataURL, HandleFileInputAsText } from "./types";

const handleFileInputSelection = async (event?: FileInputSelectionEvent) => {
    // just safety check
    if (event === undefined) {
        return null;
    }

    const { target } = event;
    // just safety check
    if (target === undefined || target === null) {
        return null;
    }

    const { files } = target;
    // just safety check
    if (files === null || files.length < 1) {
        return null;
    }

    return files;
};

export const handleFileInputSelectionAsArrayBuffer = async (event?: FileInputSelectionEvent) => {
    const files = await handleFileInputSelection(event);
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

export const handleFileInputSelectionAsDataURL = async (event?: FileInputSelectionEvent) => {
    const files = await handleFileInputSelection(event);
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

export const handleFileInputSelectionAsText = async (event?: FileInputSelectionEvent) => {
    const files = await handleFileInputSelection(event);
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
