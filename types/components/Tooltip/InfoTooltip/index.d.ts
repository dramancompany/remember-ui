import React from 'react';
import type { Instance, Props as TippyProps } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
interface Props {
    children: React.ReactNode;
    content: React.ReactNode;
    visible?: boolean;
    className: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onShow?: (instance: Instance<TippyProps>) => false | void;
    customAnimation?: 'headShake';
}
export declare const InfoTooltip: ({ children, content, className, onClick, onShow, visible, customAnimation, }: Props) => JSX.Element;
export {};
