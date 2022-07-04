import { MouseEventHandler, ReactNode, RefObject } from 'react';
interface Props {
    name?: string;
    value?: string;
    onChange: (value: string) => {};
    outerRef?: RefObject<HTMLTextAreaElement>;
    footer?: ReactNode;
    placeholder?: string;
    maxLength?: number;
    type?: string;
    label?: string;
    className?: string;
    required?: boolean;
    blankLabel?: boolean;
    readOnly?: boolean;
    validate?: (value?: string | number) => string;
    first?: boolean;
    countLength?: boolean;
    textareaOnClick?: MouseEventHandler<HTMLTextAreaElement>;
    resize?: boolean;
}
export declare const Textarea: ({ outerRef, value, type, name, onChange, placeholder, label, required, first, className, maxLength, blankLabel, countLength, textareaOnClick, resize, }: Props) => JSX.Element;
export {};
