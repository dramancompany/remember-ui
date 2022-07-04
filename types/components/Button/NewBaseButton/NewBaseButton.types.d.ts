/// <reference types="react" />
import type { BaseButtonSizeType } from '../BaseButton/Button.types';
export declare type NewBaseButtonTheme = 'yellow' | 'red' | 'blue' | 'gray' | 'light' | 'primary';
export interface NewBaseButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    theme?: NewBaseButtonTheme;
    outline?: boolean;
    size?: BaseButtonSizeType;
    isLoading?: boolean;
    block?: boolean;
    children: React.ReactChild | React.ReactChildren;
    testId?: string;
}
export declare type NewBaseButtonStyleType = Required<Pick<NewBaseButtonProps, 'block' | 'disabled' | 'outline' | 'size' | 'isLoading'>> & {
    buttonTheme: NewBaseButtonTheme;
};
