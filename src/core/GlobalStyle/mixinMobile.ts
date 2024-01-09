import { css } from 'styled-components';

import { font } from './mixin';
import type { FontProps } from './mixin';

/**
 * @description size 18px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileTitle = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '18px',
    weight: 'bold',
    lineHeight: '23px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 16px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSubTitle16 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '16px',
    weight: 'bold',
    lineHeight: '22px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 14px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSubTitle14 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '14px',
    weight: 'bold',
    lineHeight: '19px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 13px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSubTitle13 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '13px',
    weight: 'bold',
    lineHeight: '18px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 12px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSubTitle12 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '12px',
    weight: 'bold',
    lineHeight: '15px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 15px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileBody15 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '15px',
    weight: 'normal',
    lineHeight: '21px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 13px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileBody13 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '13px',
    weight: 'normal',
    lineHeight: '18px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 12px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileBody12 = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '12px',
    weight: 'normal',
    lineHeight: '16px',
    color,
    opacity,
    ...rest,
  })};
`;

/**
 * @description size 11px
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const mobileSubCaption = ({ color, opacity, ...rest }: FontProps) => css`
  ${font({
    size: '11px',
    weight: 'normal',
    lineHeight: '15px',
    color,
    opacity,
    ...rest,
  })};
`;
