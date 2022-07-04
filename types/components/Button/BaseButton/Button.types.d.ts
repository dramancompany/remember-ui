import type { ReactNode } from 'react';
import type { BUTTONS } from '.';
export declare type BaseButtonSizeType = 'small' | 'medium' | 'large' | 'xlarge';
export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    rounded?: boolean;
    color?: keyof typeof BUTTONS;
    fill?: boolean;
    borderless?: boolean;
    size?: BaseButtonSizeType;
    width?: number;
    isLoading?: boolean;
    children?: ReactNode;
    testId?: string;
}
export declare type BaseButtonStyleType = Required<Pick<BaseButtonProps, 'size' | 'rounded' | 'borderless' | 'disabled'>> & Pick<BaseButtonProps, 'width'> & {
    fillColor: boolean;
};
