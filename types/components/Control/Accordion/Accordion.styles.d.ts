/// <reference types="react" />
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Menu: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Item: import("styled-components").StyledComponent<"div", any, {
    hasToggled?: boolean | undefined;
    height?: string | undefined;
}, never>;
export declare const ItemTitle: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const ItemChecker: import("styled-components").StyledComponent<"input", any, {
    height: string;
}, never>;
export declare const ItemInner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemInnerTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ItemInnerCheckbox: import("styled-components").StyledComponent<({ state, onClick, disabled, className, round, }: import("../Checkbox").Props) => JSX.Element, any, {}, never>;
