import React from 'react';
import type { CSSProperties } from 'react';
interface Props {
    children: React.ReactNode;
    className: string;
    direction: CSSProperties['flexDirection'];
}
export declare const DoczContainer: ({ children, direction, className }: Props) => JSX.Element;
export {};
