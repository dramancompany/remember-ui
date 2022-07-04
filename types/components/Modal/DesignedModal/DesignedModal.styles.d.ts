/// <reference types="react" />
export declare const Container: import("styled-components").StyledComponent<({ isOpen, onClose, onAfterOpen, allowKeyExit, children, isDraggable, isDragDisabled, isDragBounded, dragOnStart, dragOnStop, dragOnDrag, bodyScrollLockTarget, }: import("../BaseModal").BaseModalProps) => JSX.Element, any, {}, never>;
export declare const Modal: import("styled-components").StyledComponent<"div", any, {
    isDraggable?: boolean | undefined;
    mobileWidth?: string | number | undefined;
    mobileHeight?: string | number | undefined;
}, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalHeaderContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const SubTitle: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Block: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Buttons: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<({ className, disabled, onClick, rounded, color, fill, borderless, size, width, isLoading, children, testId, }: import("../../Button/BaseButton/Button.types").BaseButtonProps) => JSX.Element, any, {
    buttonCount?: number | undefined;
}, never>;
