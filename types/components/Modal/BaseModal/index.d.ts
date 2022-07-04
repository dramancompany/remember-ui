import { ReactNode } from 'react';
export interface BaseModalProps {
    isOpen: boolean;
    isDraggable?: boolean;
    isDragDisabled?: boolean;
    isDragBounded?: boolean;
    /** ESC 키로 모달 닫기 가능 여부 */
    allowKeyExit?: boolean;
    /** 스크롤 이벤트를 방지할 엘리먼트 셀렉터 */
    bodyScrollLockTarget?: string | null;
    onClose?: () => void;
    onAfterOpen?: () => void;
    dragOnStart?: () => void;
    dragOnStop?: () => void;
    dragOnDrag?: () => void;
    children: ReactNode;
}
export declare const BaseModal: ({ isOpen, onClose, onAfterOpen, allowKeyExit, children, isDraggable, isDragDisabled, isDragBounded, dragOnStart, dragOnStop, dragOnDrag, bodyScrollLockTarget, }: BaseModalProps) => JSX.Element;
