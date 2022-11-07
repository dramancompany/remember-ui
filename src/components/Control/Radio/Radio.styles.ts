import styled, { css } from 'styled-components';

import { contents000, contents300, secondary100 } from 'core';

export const SIZE_MAP = {
  small: '13.4px',
  medium: '20px',
} as const;

export const MARGIN_MAP = {
  small: '1.3px',
  medium: '2px',
} as const;

export const COLOR_MAP = {
  yellow: secondary100,
  black: contents000,
} as const;

export const RadioInput = styled.input.attrs({ type: 'radio' })<{
  theme?: keyof typeof COLOR_MAP;
  $size?: keyof typeof SIZE_MAP;
}>`
  appearance: none;
  ${({ $size = 'medium' }) => css`
    height: ${SIZE_MAP[$size]};
    width: ${SIZE_MAP[$size]};
    margin: ${MARGIN_MAP[$size]};
    border-radius: 50%;
  `}
  border: 1px solid ${contents300};
  accent-color: ${secondary100};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: transparent;
    ${({ $size }) => css`
      width: ${$size === 'medium' ? '8px' : '5px'};
      height: ${$size === 'medium' ? '8px' : '5px'};
    `}
  }

  &:hover {
    border-color: ${secondary100};
  }

  &:checked {
    border-color: ${secondary100};

    &::after {
      background-color: ${secondary100};
    }
  }
`;
