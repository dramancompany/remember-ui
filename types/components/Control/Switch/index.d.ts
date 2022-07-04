import { ChangeEventHandler } from 'react';
export declare type SwitchSize = 'small' | 'large';
interface Props {
    className?: string;
    checked?: boolean;
    onClick: ChangeEventHandler<HTMLInputElement>;
    size?: SwitchSize;
    color?: string;
}
export declare const Switch: ({ className, checked, onClick, size, color, }: Props) => JSX.Element;
export {};
