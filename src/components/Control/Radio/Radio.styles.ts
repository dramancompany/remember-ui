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
  ${({ theme = 'yellow', $size = 'medium' }) => css`
    height: ${SIZE_MAP[$size]};
    width: ${SIZE_MAP[$size]};
    margin: 0 10px;

    &:checked {
      accent-color: ${COLOR_MAP[theme]};
    }
  `}
  cursor: pointer;
`;
