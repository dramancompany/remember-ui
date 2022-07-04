/// <reference types="react" />
import type { BaseButtonProps } from './Button.types';
export declare const BUTTONS: {
    readonly black: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly yellow: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly 'light-yellow': import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly gray: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly blue: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly red: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly lite: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
    readonly plus: import("styled-components").StyledComponent<"div", any, Required<Pick<BaseButtonProps, "disabled" | "size" | "rounded" | "borderless">> & Pick<BaseButtonProps, "width"> & {
        fillColor: boolean;
    }, never>;
};
/**
 * @deprecated NewBaseButton으로 대체되었습니다.
 */
export declare const BaseButton: ({ className, disabled, onClick, rounded, color, fill, borderless, size, width, isLoading, children, testId, }: BaseButtonProps) => JSX.Element;
