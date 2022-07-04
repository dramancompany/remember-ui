import { ReactNode } from 'react';
interface Props {
    isOpen: boolean;
    isDraggable?: boolean;
    isDragBounded?: boolean;
    icon?: string;
    message?: string;
    title?: (currentCount: number, totalCount: number) => ReactNode;
    totalCount?: number;
    currentCount?: number;
    mobileWidth?: string | number;
    mobileHeight?: string | number;
    dragOnStart?: () => void;
    dragOnStop?: () => void;
    dragOnDrag?: () => void;
}
export declare const ProgressModal: ({ icon, title, currentCount, totalCount, message, isOpen, isDraggable, isDragBounded, dragOnStart, dragOnStop, dragOnDrag, mobileWidth, mobileHeight, }: Props) => JSX.Element;
export {};
