/// <reference types="react" />
declare type ValueType = string | number;
export interface SelectOption<T extends ValueType, P = any> {
    id: T;
    label: string;
    value?: P;
    disabled?: boolean;
}
export interface SelectProps<T extends ValueType> {
    options: SelectOption<T>[];
    value?: T;
    onChange: (id: T) => void;
    className?: string;
    label?: string;
    changeInputMode?: () => void;
    required?: boolean;
    isFixedSelect?: boolean;
    maxHeight?: number;
    placeholder?: string;
    marginBottom?: number;
    error?: boolean;
    errorMessage?: string;
}
export declare const Select: <T extends ValueType>({ options, value, className, onChange, label, changeInputMode, required, isFixedSelect, maxHeight, placeholder, marginBottom, errorMessage, error, }: SelectProps<T>) => JSX.Element;
export {};
