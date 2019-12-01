export type ReadFileAsArrayBufferType = ArrayBuffer | null;
export type ReadFileAsDataURLType = string | null;
export type ReadFileAsTextType = string | null;

export interface FileInputDropEvent {
    dataTransfer?: DataTransfer | null;
}

export interface FileInputSelectionEvent {
    target?: HTMLInputElement | null;
}

export interface HandleFileInput {
    file: File;
}

export interface HandleFileInputAsArrayBuffer extends HandleFileInput {
    data: ArrayBuffer;
}

export interface HandleFileInputAsDataURL extends HandleFileInput {
    data: string;
}

export interface HandleFileInputAsText extends HandleFileInput {
    data: string;
}
