import React from 'react';
import type { MouseEventHandler } from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    isOverflowed?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
export declare const Chip: ({ children, className, isOverflowed, onClick, }: Props) => JSX.Element;
export {};
