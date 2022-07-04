import { ChangeEventHandler } from 'react';
interface Props {
    label1?: string;
    label2?: string;
    value1?: string;
    value2?: string;
    name1?: string;
    name2?: string;
    placeholder1?: string;
    placeholder2?: string;
    onChange1: ChangeEventHandler<HTMLInputElement>;
    onChange2: ChangeEventHandler<HTMLInputElement>;
    validate?: (value1?: string | number, value2?: string | number) => string;
    maxLength?: number;
    onlyNumber?: boolean;
    width?: number;
    className?: string;
}
export declare const DoubleInput: ({ label1, label2, value1, value2, name1, name2, placeholder1, placeholder2, onChange1, onChange2, validate, maxLength, onlyNumber, width, className, }: Props) => JSX.Element;
export {};
