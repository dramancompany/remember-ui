import React from 'react';
import type { CSSProperties } from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    direction?: CSSProperties['flexDirection'];
}
/** @deprecated */
export declare const Container: ({ children, className, direction, }: Props) => JSX.Element;
export {};
