import { ChangeEventHandler, MouseEventHandler, ReactNode, RefObject } from 'react';
import type { MaskedInputProps } from 'react-text-mask';
interface Props {
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
    mask: MaskedInputProps['mask'];
}
export declare const MaskingInput: ({ value, name, onChange, onClick, placeholder, label, autoFocus, required, disabled, className, onEnter, useError, errorMark, footer, validate, type, mask, blankLabel, marginBottom, }: Props) => JSX.Element;
export {};
