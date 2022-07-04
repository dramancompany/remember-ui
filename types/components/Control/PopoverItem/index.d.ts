import React from 'react';
import type { MouseEventHandler } from 'react';
export interface PopoverProps {
    selected?: boolean;
    warning?: boolean;
    bold?: boolean;
}
interface Props extends PopoverProps {
    children: React.ReactNode;
    onClick: MouseEventHandler;
    className?: string;
}
export declare const PopoverItem: ({ children, selected, warning, bold, onClick, className, }: Props) => JSX.Element;
export {};
