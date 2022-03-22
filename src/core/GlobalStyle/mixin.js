import { css } from 'styled-components';

import {
  mobileSizeBreak,
  mobileSmallSizeBreak,
  landingMobileSizeBreak,
  contents000,
} from './variable';

/**
 * {@link https://github.com/orioncactus/pretendard#html-1}
 */

const PRETENDARD_FONT_FAMILY = "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif"

/**
 * flexbox 관련 설정 믹스인
 * @param { boolean | string } horizontal: `justify-content`
 * @param { boolean | string } vertical: `align-items`
 * @param { boolean | string } direction: `flex-direction`
 */
export const flexContainer = (
  horizontal = false,
  vertical = false,
  direction = false
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${horizontal};
  align-items: ${vertical};
`;

export const flexCenter = css`
  ${flexContainer('center', 'center')}
`;

export const flexCenterX = css`
  ${flexContainer('center', false)}
`;

export const flexCenterY = css`
  ${flexContainer(false, 'center')}
`;

export const flexEndY = css`
  ${flexContainer(false, 'flex-end')}
`;

export const flexColumnCenter = css`
  ${flexContainer(false, 'center', 'column')}
`;

export const flexColumnCenterX = css`
  ${flexContainer(false, 'center', 'column')}
`;

export const flexColumnCenterY = css`
  ${flexContainer('center', false, 'column')}
`;

export const flexColumnCenterAll = css`
  ${flexContainer('center', 'center', 'column')}
`;

/**
 * 텍스트 폰트 관련 설정 믹스인
 * @param { { size / weight / color / opacity } } params
 * size: font-size
 * weight: font-weight
 * color: color
 * opacity: opacity
 */
export const font = ({
  size = '12px',
  weight = 'normal',
  color = 'black',
  opacity = false,
  lineHeight = 'normal',
}) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${color};
  opacity: ${opacity};
  line-height: ${lineHeight};
`;

/**
 * @description size 24px / lineHeight 34px / weight 600
 */
export const headline2_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '24px',
    lineHeight: '34px',
    weight: 600,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 20px / lineHeight 26px / weight 600
 */
export const headline3_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '20px',
    lineHeight: '26px',
    weight: 600,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 16px / lineHeight 26px / weight 600
 */
export const headline4_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '16px',
    lineHeight: '26px',
    weight: 600,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 16px / lineHeight 26px / weight 400
 */
export const headline4_M = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '16px',
    lineHeight: '26px',
    weight: 400,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 14px / lineHeight 24px / weight 600
 */
export const body1_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '14px',
    lineHeight: '24px',
    weight: 600,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 14px / lineHeight 24px / weight 400
 */
export const body1_M = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '14px',
    lineHeight: '24px',
    weight: 400,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 12px / lineHeight 19px / weight 700
 */
export const body2_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '12px',
    lineHeight: '19px',
    weight: 700,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 12px / lineHeight 19px / weight 400
 */
export const body2_M = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '12px',
    lineHeight: '19px',
    weight: 400,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY};
`;

/**
 * @description size 10px / lineHeight 14px / weight 600
 */
export const caption_B = ({ weight, color, opacity, ...rest }) => css`
  ${font({
    size: '10px',
    lineHeight: '14px',
    weight: 600,
    color: contents000,
    opacity,
    ...rest,
  })};
  font-family: ${PRETENDARD_FONT_FAMILY}
`;

// Deprecated
/**
 * @description size 12px
 */
export const textExtraSmall = ({ weight, color, opacity, ...rest }) => css`
  ${font({ size: '12px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 14px
 */
export const textSmall = ({ weight, color, opacity, ...rest }) => css`
  ${font({ size: '14px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 16px
 */
export const textMedium = ({ weight, color, opacity, ...rest }) => css`
  ${font({ size: '16px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 18px
 */
export const textLarge = ({ weight, color, opacity, ...rest }) => css`
  ${font({ size: '18px', weight, color, opacity, ...rest })};
`;

/**
 * @description size 20px
 */
export const textExtraLarge = ({ weight, color, opacity, ...rest }) => css`
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
}) => css`
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
}) => css`
  ${font({ size: '30px', weight, color, opacity, ...rest })};
`;

/**
 * 글자 출력 관련 설정
 */
export const textBreakPre = css`
  white-space: pre-line;
  word-break: normal;
  word-wrap: break-word;
`;

export const textBreak = css`
  word-break: break-all;
  word-wrap: break-word;
`;

export const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const textLink = css`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * breakpoint 관련 mixin
 */

export const mobileSmallOnly = (cssContent) => css`
  @media only screen and (max-width: ${mobileSmallSizeBreak}) {
    ${cssContent}
  }
`;

export const mobileOnly = (cssContent) => css`
  @media only screen and (max-width: ${mobileSizeBreak}) {
    ${cssContent}
  }
`;

export const webOnly = (cssContent) => css`
  @media only screen and (min-width: ${mobileSizeBreak}) {
    ${cssContent}
  }
`;

export const landingMobileOnly = (cssContent) => css`
  @media only screen and (max-width: ${landingMobileSizeBreak}) {
    ${cssContent}
  }
`;

export const landingWebOnly = (cssContent) => css`
  @media only screen and (min-width: ${landingMobileSizeBreak}) {
    ${cssContent}
  }
`;

export const placeholderColor = (color, center = false) => css`
  &::placeholder {
    color: ${color};

    ${center &&
    css`
      text-align: center;
    `}
  }
`;

export const displayWebOnly = css`
  ${mobileOnly(css`
    display: none !important;
  `)}
`;

export const displayMobileOnly = css`
  ${webOnly(css`
    display: none !important;
  `)}
`;

export const minHeightFix = (direction = 'row') => css`
  display: flex;
  flex-direction: ${direction};
`;

export const minHeightFixChild = css`
  flex: 1 1 auto;
`;
