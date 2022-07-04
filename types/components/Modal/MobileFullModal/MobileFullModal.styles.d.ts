/// <reference types="react" />
export declare const Container: import("styled-components").StyledComponent<({ isOpen, onClose, onAfterOpen, allowKeyExit, children, isDraggable, isDragDisabled, isDragBounded, dragOnStart, dragOnStop, dragOnDrag, bodyScrollLockTarget, }: import("../BaseModal").BaseModalProps) => JSX.Element, any, {}, never>;
export declare const Modal: import("styled-components").StyledComponent<"div", any, {
    topNavbarOffset: string;
}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderLeft: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderLeftIcon: import("styled-components").StyledComponent<"img", any, {
    src: any;
    alt: "close";
}, "alt" | "src">;
export declare const HeaderTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderTitleText: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderSubTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderSubTitleText: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderRight: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const HeaderRightButton: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const BodyMain: import("styled-components").StyledComponent<"div", any, {
    hasFooter?: boolean | undefined;
}, never>;
export declare const Footer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<({ className, disabled, onClick, theme, outline, size, isLoading, block, children, testId, }: import("../../Button/NewBaseButton/NewBaseButton.types").NewBaseButtonProps) => JSX.Element, any, {}, never>;
