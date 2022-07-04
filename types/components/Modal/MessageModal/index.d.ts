import { ReactNode } from 'react';
interface Props {
    isOpen: boolean;
    isLoading?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose: () => void;
    confirmText?: string;
    cancelText?: string;
    children?: ReactNode;
}
export declare const MessageModal: ({ isOpen, children, onConfirm, onCancel, onClose, confirmText, cancelText, isLoading, }: Props) => JSX.Element;
export {};
