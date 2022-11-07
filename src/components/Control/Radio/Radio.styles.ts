import styled, { css } from 'styled-components';

import { contents000, secondary100 } from 'core';

export const SIZE_MAP = {
  small: '16px',
  medium: '24px',
} as const;

export const COLOR_MAP = {
  yellow: secondary100,
  black: contents000,
} as const;

export const RadioInput = styled.input.attrs({ type: 'radio' })<{
  theme?: keyof typeof COLOR_MAP;
  $size?: keyof typeof SIZE_MAP;
}>`
  // career-web 같은 경우 전역적으로 input 태그에 appearance: none; 이 적용되어 있어서 강제로 지정 필요..
  appearance: radio;
  cursor: pointer;

  ${({ theme = 'yellow', $size = 'medium' }) => css`
    height: ${SIZE_MAP[$size]};
    width: ${SIZE_MAP[$size]};

    &:checked {
      accent-color: ${COLOR_MAP[theme]};
    }
  `}
`;
