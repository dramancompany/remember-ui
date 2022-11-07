import styled, { css } from 'styled-components';

import {
  bg100,
  contents200,
  disabled as disabledColor,
  secondary100,
} from 'core';

export const SIZE_MAP = {
  small: '16px',
  medium: '24px',
} as const;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })<{
  isRound?: boolean;
  $size?: keyof typeof SIZE_MAP;
}>`
  appearance: none;
  ${({ $size = 'medium', isRound, disabled }) => css`
    width: ${SIZE_MAP[$size]};
    height: ${SIZE_MAP[$size]};
    border-radius: ${isRound ? '50%' : '2px'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
  border: 1px solid ${contents200};
  accent-color: ${secondary100};
  background-color: ${bg100};
  position: relative;

  &:hover,
  &:focus {
    border-color: ${secondary100};
    background-color: ${bg100};
  }

  &:checked {
    border-color: ${secondary100};
    background-color: ${secondary100};
  }

  &:disabled {
    border-color: ${disabledColor};

    &:checked {
      background-color: ${disabledColor};
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%) rotate(-45deg);
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${bg100};
    border-radius: 1px;
    ${({ $size }) => css`
      width: ${$size === 'medium' ? '12px' : '10px'};
      height: ${$size === 'medium' ? '6px' : '5px'};
    `}
  }
`;
