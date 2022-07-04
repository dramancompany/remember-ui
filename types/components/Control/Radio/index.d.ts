/// <reference types="react" />
interface Props {
    isChecked: boolean;
    onClick?: () => void;
    className?: string;
    theme?: 'yellow' | 'black';
}
export declare const Radio: ({ isChecked, onClick, className, theme, }: Props) => JSX.Element;
export {};
