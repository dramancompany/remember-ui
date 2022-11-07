import styled, { css } from 'styled-components';

import {
  bg100,
  contents300,
  disabled as disabledColor,
  secondary100,
} from 'core';

export const SIZE_MAP = {
  small: '13.4px',
  medium: '20px',
} as const;

export const MARGIN_MAP = {
  small: '1.3px',
  medium: '2px',
} as const;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })<{
  isRound?: boolean;
  $size?: keyof typeof SIZE_MAP;
}>`
  appearance: none;
  ${({ $size = 'medium', isRound, disabled }) => css`
    width: ${SIZE_MAP[$size]};
    height: ${SIZE_MAP[$size]};
    margin: ${MARGIN_MAP[$size]};
    border-radius: ${isRound ? '50%' : '2px'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
  border: 1px solid ${contents300};
  accent-color: ${secondary100};
  background-color: ${bg100};
  position: relative;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%) rotate(-45deg);
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: ${contents300};
    ${({ $size }) => css`
      width: ${$size === 'medium' ? '8px' : '6px'};
      height: ${$size === 'medium' ? '4px' : '3px'};
    `}
  }

  &:hover {
    border-color: ${secondary100};
    background-color: ${bg100};

    &::after {
      border-color: ${secondary100};
    }
  }

  &:checked {
    border-color: ${secondary100};
    background-color: ${secondary100};

    &::after {
      border-color: ${bg100};
    }
  }

  &:disabled {
    border-color: ${disabledColor};

    &:hover::after {
      border-color: ${disabledColor};
    }

    &:checked {
      background-color: ${disabledColor};

      &::after {
        border-color: ${bg100};
      }
    }
  }
`;
