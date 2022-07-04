import { ReactNode } from 'react';
import type { Placement } from 'popper.js';
interface Props {
    content: ReactNode;
    onPopoverOpenChange?: (isChange: boolean) => void;
    className?: string;
    customElement?: ReactNode;
    size?: 'small' | 'large';
    onOpen?: () => void;
    distance?: number;
    trigger?: 'mouseenter' | 'click' | 'focus';
    placement?: Placement;
    disabled?: boolean;
    children: ReactNode;
}
export declare const BasePopover: ({ content, onPopoverOpenChange, className, customElement, size, onOpen, distance, trigger, placement, disabled, children, }: Props) => JSX.Element;
export {};
