import { ReadFileAsArrayBufferType, ReadFileAsDataURLType, ReadFileAsTextType } from "./types";

type ResolveAsArrayBufferType = (value: ReadFileAsArrayBufferType | PromiseLike<ReadFileAsArrayBufferType> | undefined) => void;
export const readFileAsArrayBuffer = (file: File) => {
    return new Promise<ReadFileAsArrayBufferType>((resolve: ResolveAsArrayBufferType) => {
        const fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result as ReadFileAsArrayBufferType);
        };
        fr.readAsArrayBuffer(file);
    });
};

type ResolveAsDataURLType = (value: ReadFileAsDataURLType | PromiseLike<ReadFileAsDataURLType> | undefined) => void;
export const readFileAsDataURL = (file: File) => {
    return new Promise<ReadFileAsDataURLType>((resolve: ResolveAsDataURLType) => {
        const fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result as ReadFileAsDataURLType);
        };
        fr.readAsDataURL(file);
    });
};

type ResolveAsTextType = (value: ReadFileAsTextType | PromiseLike<ReadFileAsTextType> | undefined) => void;
export const readFileAsText = (file: File) => {
    return new Promise<ReadFileAsTextType>((resolve: ResolveAsTextType) => {
        const fr = new FileReader();
        fr.onload = () => {
            resolve(fr.result as ReadFileAsTextType);
        };
        fr.readAsText(file);
    });
};
