import { ReactNode } from 'react';
interface Props {
    isOpen?: boolean;
    isLoading?: boolean;
    delegateCloseControl?: boolean;
    submitButtonDisabled?: boolean;
    title: string;
    subTitle?: string;
    submitText?: string;
    topNavbarOffset?: string;
    headerButtonText?: string;
    bodyScrollLockTargetId?: string;
    onClose?: () => void;
    onAfterOpen: () => void;
    onHeaderButtonClick: () => void;
    submit?: () => void;
    children?: ReactNode;
}
export declare const MobileFullModal: ({ topNavbarOffset, isOpen, onClose, onAfterOpen, title, subTitle, headerButtonText, onHeaderButtonClick, submit, submitText, submitButtonDisabled, isLoading, bodyScrollLockTargetId, delegateCloseControl, children, }: Props) => JSX.Element;
export {};
