import { ChangeEventHandler, RefObject, MouseEventHandler, ReactNode } from 'react';
export interface BaseInputProps {
    name?: string;
    value?: string | number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    outerRef?: RefObject<HTMLInputElement>;
    footer?: ReactNode;
    placeholder?: string;
    maxLength?: number;
    marginBottom?: number;
    type?: string;
    label?: string;
    className?: string;
    autoFocus?: boolean;
    required?: boolean;
    disabled?: boolean;
    useError?: boolean;
    errorMark?: boolean;
    onlyNumber?: boolean;
    blankLabel?: boolean;
    readOnly?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onEnter?: VoidFunction;
    validate?: (value?: string | number) => string;
}
export declare const BaseInput: ({ value, name, onChange, onClick, placeholder, label, autoFocus, required, disabled, className, onEnter, useError, errorMark, footer, validate, maxLength, onlyNumber, type, blankLabel, readOnly, marginBottom, outerRef, ...rest }: BaseInputProps) => JSX.Element;
