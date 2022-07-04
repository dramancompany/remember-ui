import { ReactNode } from 'react';
import { BaseModalProps } from '../BaseModal';
interface Props extends Omit<BaseModalProps, 'allowKeyExit' | 'bodyScrollLockTarget' | 'children'> {
    title?: string;
    subTitle?: string;
    customText?: string;
    submit?: () => void;
    close?: () => void;
    submitText: string;
    closeText?: string;
    submitButtonDisabled?: boolean;
    headerButton?: ReactNode;
    isLoading?: boolean;
    mobileWidth?: string | number;
    mobileHeight?: string | number;
    bodyScrollLockTargetId?: string | null;
    delegateCloseControl?: boolean;
    children?: ReactNode;
}
export declare const DesignedModal: ({ isOpen, onClose, title, subTitle, children, customText, submit, close, submitText, closeText, submitButtonDisabled, headerButton, isLoading, isDraggable, isDragDisabled, isDragBounded, onAfterOpen, dragOnStart, dragOnStop, dragOnDrag, mobileWidth, mobileHeight, bodyScrollLockTargetId, delegateCloseControl, }: Props) => JSX.Element;
export {};
