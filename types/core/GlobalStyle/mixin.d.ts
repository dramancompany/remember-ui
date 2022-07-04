import type { CSSProperties } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
/**
 * flexbox 관련 설정 믹스인
 * @param { boolean | string } horizontal: `justify-content`
 * @param { boolean | string } vertical: `align-items`
 * @param { boolean | string } direction: `flex-direction`
 */
export declare const flexContainer: (horizontal?: CSSProperties['justifyContent'] | null, vertical?: CSSProperties['alignItems'] | null, direction?: CSSProperties['flexDirection'] | null) => FlattenSimpleInterpolation;
export declare const flexCenter: FlattenSimpleInterpolation;
export declare const flexCenterX: FlattenSimpleInterpolation;
export declare const flexCenterY: FlattenSimpleInterpolation;
export declare const flexEndY: FlattenSimpleInterpolation;
export declare const flexColumnCenter: FlattenSimpleInterpolation;
export declare const flexColumnCenterX: FlattenSimpleInterpolation;
export declare const flexColumnCenterY: FlattenSimpleInterpolation;
export declare const flexColumnCenterAll: FlattenSimpleInterpolation;
export declare const TYPOGRAPHY_STYLES: {
    Headline2_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Headline3_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Headline4_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Headline4_M: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Body1_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Body1_M: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Body2_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Body2_M: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
    Caption_B: {
        fontSize: number;
        lineHeight: number;
        fontWeight: number;
    };
};
export declare const getTypographyStyles: (typography: keyof typeof TYPOGRAPHY_STYLES) => FlattenSimpleInterpolation;
/**
 * 텍스트 폰트 관련 설정 믹스인
 * @param { { size / weight / color / opacity } } params
 * size: font-size
 * weight: font-weight
 * color: color
 * opacity: opacity
 */
export interface FontProps {
    size?: `${number}px`;
    weight?: CSSProperties['fontWeight'];
    color?: CSSProperties['color'];
    opacity?: CSSProperties['opacity'] | null;
    lineHeight?: CSSProperties['lineHeight'];
}
export declare const font: ({ size, weight, color, opacity, lineHeight, }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 12px
 */
export declare const textExtraSmall: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 14px
 */
export declare const textSmall: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 16px
 */
export declare const textMedium: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 18px
 */
export declare const textLarge: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 20px
 */
export declare const textExtraLarge: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 22px
 */
export declare const textDoubleExtraLarge: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * @description size 30px
 */
export declare const textTripleExtraLarge: ({ weight, color, opacity, ...rest }: FontProps) => FlattenSimpleInterpolation;
/**
 * 글자 출력 관련 설정
 */
export declare const textBreakPre: FlattenSimpleInterpolation;
export declare const textBreak: FlattenSimpleInterpolation;
export declare const textEllipsis: FlattenSimpleInterpolation;
export declare const textLink: FlattenSimpleInterpolation;
/**
 * breakpoint 관련 mixin
 */
export declare const mobileSmallOnly: (cssContent: string) => FlattenSimpleInterpolation;
export declare const mobileOnly: (cssContent: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
export declare const webOnly: (cssContent: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
export declare const landingMobileOnly: (cssContent: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
export declare const landingWebOnly: (cssContent: FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
export declare const placeholderColor: (color: CSSProperties["color"], center?: boolean) => FlattenSimpleInterpolation;
export declare const displayWebOnly: FlattenSimpleInterpolation;
export declare const displayMobileOnly: FlattenSimpleInterpolation;
export declare const minHeightFix: (direction?: string) => FlattenSimpleInterpolation;
export declare const minHeightFixChild: FlattenSimpleInterpolation;
