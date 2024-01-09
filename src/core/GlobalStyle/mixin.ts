import type { CSSProperties } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import {
  mobileSizeBreak,
  mobileSmallSizeBreak,
  landingMobileSizeBreak,
} from './variable';

/**
 * {@link https://github.com/orioncactus/pretendard#html-1}
 */

const PRETENDARD_FONT_FAMILY =
  "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif";

/**
 * flexbox 관련 설정 믹스인
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 * @param { boolean | string } horizontal: `justify-content`
 * @param { boolean | string } vertical: `align-items`
 * @param { boolean | string } direction: `flex-direction`
 */

export const flexContainer = (
  horizontal: CSSProperties['justifyContent'] | null = 'normal',
  vertical: CSSProperties['alignItems'] | null = 'normal',
  direction: CSSProperties['flexDirection'] | null = 'row'
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${horizontal};
  align-items: ${vertical};
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexCenter = css`
  ${flexContainer('center', 'center')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexCenterX = css`
  ${flexContainer('center', null)}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexCenterY = css`
  ${flexContainer(null, 'center')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexEndY = css`
  ${flexContainer(null, 'flex-end')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexColumnCenter = css`
  ${flexContainer(null, 'center', 'column')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexColumnCenterX = css`
  ${flexContainer(null, 'center', 'column')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexColumnCenterY = css`
  ${flexContainer('center', null, 'column')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const flexColumnCenterAll = css`
  ${flexContainer('center', 'center', 'column')}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const TYPOGRAPHY_STYLES = {
  Headline2_B: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 600,
  },
  Headline3_B: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 600,
  },
  Headline4_B: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 600,
  },
  Headline4_M: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 400,
  },
  Body1_B: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 600,
  },
  Body1_M: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 400,
  },
  Body2_B: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 600,
  },
  Body2_M: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: 400,
  },
  Caption_B: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: 600,
  },
};

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const getTypographyStyles = (
  typography: keyof typeof TYPOGRAPHY_STYLES
) => {
  const { fontSize, lineHeight, fontWeight } = TYPOGRAPHY_STYLES[typography];
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight};
    font-family: ${PRETENDARD_FONT_FAMILY};
  `;
};

/**
 * 텍스트 폰트 관련 설정 믹스인
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
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

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const font = ({
  size = '12px',
  weight = 'normal',
  color = 'black',
  opacity = null,
  lineHeight = 'normal',
}: FontProps) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${color};
  opacity: ${opacity};
  line-height: ${lineHeight};
`;

// Deprecated
/**
 * @description size 12px
 */
export const textExtraSmall = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '12px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 14px
 */
export const textSmall = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '14px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 16px
 */
export const textMedium = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '16px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 18px
 */
export const textLarge = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '18px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 20px
 */
export const textExtraLarge = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '20px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 22px
 */
export const textDoubleExtraLarge = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '22px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 30px
 */
export const textTripleExtraLarge = ({
  weight,
  color,
  opacity,
  ...rest
}: FontProps) => css`
  ${font({ size: '30px', weight, color, opacity, ...rest })};
`;

/**
 * 글자 출력 관련 설정
 */

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const textBreakPre = css`
  white-space: pre-line;
  word-break: normal;
  word-wrap: break-word;
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const textBreak = css`
  word-break: break-all;
  word-wrap: break-word;
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const textLink = css`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const ellipsis = (line = 1) => {
  if (line === 1) {
    return textEllipsis;
  }

  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};
  `;
};

/**
 * breakpoint 관련 mixin
 */

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSmallOnly = (cssContent: string) => css`
  @media only screen and (max-width: ${mobileSmallSizeBreak}) {
    ${cssContent}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (max-width: ${mobileSizeBreak}) {
    ${cssContent}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const webOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (min-width: ${parseInt(mobileSizeBreak) + 1}px) {
    ${cssContent}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const landingMobileOnly = (
  cssContent: FlattenSimpleInterpolation
) => css`
  @media only screen and (max-width: ${landingMobileSizeBreak}) {
    ${cssContent}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const landingWebOnly = (cssContent: FlattenSimpleInterpolation) => css`
  @media only screen and (min-width: ${parseInt(landingMobileSizeBreak) +
    1}px) {
    ${cssContent}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const placeholderColor = (
  color: CSSProperties['color'],
  center = false
) => css`
  &::placeholder {
    color: ${color};

    ${center &&
    css`
      text-align: center;
    `}
  }
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const displayWebOnly = css`
  ${mobileOnly(css`
    display: none !important;
  `)}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const displayMobileOnly = css`
  ${webOnly(css`
    display: none !important;
  `)}
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const minHeightFix = (direction = 'row') => css`
  display: flex;
  flex-direction: ${direction};
`;

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const minHeightFixChild = css`
  flex: 1 1 auto;
`;
