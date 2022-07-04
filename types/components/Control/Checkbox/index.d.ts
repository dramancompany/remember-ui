import type { MouseEvent } from 'react';
export interface Props {
    state?: 'on' | 'off';
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    className?: string;
    round?: boolean;
}
export declare const Checkbox: ({ state, onClick, disabled, className, round, }: Props) => JSX.Element;
