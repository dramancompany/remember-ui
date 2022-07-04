/// <reference types="react" />
interface Props {
    id: string;
    onChange: (fileReaderResult?: string | ArrayBuffer | null) => void;
    label?: string;
    className?: string;
}
export declare const ImageInput: ({ id, onChange, label, className }: Props) => JSX.Element;
export {};
