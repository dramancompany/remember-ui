import { ReactNode } from 'react';
import { BaseModalProps } from '../BaseModal';
declare type IconType = 'warning' | 'success';
declare type Type = 'delete' | 'ok';
interface Props extends Omit<BaseModalProps, 'allowKeyExit' | 'onAfterOpen' | 'bodyScrollLockTarget' | 'children'> {
    icon?: IconType;
    type?: Type;
    title?: string;
    message?: string;
    isOpen: boolean;
    showClose?: boolean;
    onOk?: () => void;
    okText?: string;
    closeText?: string;
    children?: ReactNode;
    onCloseAction?: () => void;
    mobileWidth?: string | number;
    mobileHeight?: string | number;
    bodyScrollLockTargetId?: string | null;
    delegateCloseControl?: boolean;
    testId?: string;
}
export declare const ConfirmModal: ({ icon, title, message, type, isOpen, isDraggable, isDragDisabled, isDragBounded, onClose, onOk, okText, closeText, showClose, children, onCloseAction, dragOnStart, dragOnStop, dragOnDrag, mobileWidth, mobileHeight, bodyScrollLockTargetId, delegateCloseControl, testId, }: Props) => JSX.Element;
export {};
