import React from 'react';
export interface MoreButtonProps {
    className?: string;
    value?: boolean;
    size?: 'small' | 'large';
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}
export declare const MoreButton: ({ value, size, onClick, className, }: MoreButtonProps) => JSX.Element;
