/// <reference types="react" />
export interface SpinnerProps {
    width?: number;
    height?: number;
    borderWeight?: number;
    theme?: 'white' | 'gray';
    className?: string;
}
export declare const Spinner: ({ width, height, borderWeight, theme, className, }: SpinnerProps) => JSX.Element;
