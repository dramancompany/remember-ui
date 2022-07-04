import React from 'react';
export interface LinkButtonProps {
    address?: string;
    showAddress?: boolean;
    target?: string;
    className?: string;
    children: React.ReactNode;
}
export declare const LinkButton: ({ address, showAddress, children, className, target, }: LinkButtonProps) => JSX.Element;
