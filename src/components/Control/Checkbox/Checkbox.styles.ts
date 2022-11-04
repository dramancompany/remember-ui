import styled, { css } from 'styled-components';

import {
  bg100,
  contents200,
  disabled as disabledColor,
  secondary100,
} from 'core';

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })<{
  isRound?: boolean;
}>`
  appearance: none;
  ${({ isRound, disabled }) => css`
    width: ${isRound ? '24px' : '16px'};
    height: ${isRound ? '24px' : '16px'};
    border-radius: ${isRound ? '50%' : '2px'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
  border: 1px solid ${contents200};
  accent-color: ${secondary100};
  background-color: ${bg100};
  position: relative;

  &:hover,
  &:focus,
  &:checked {
    border-color: ${secondary100};
  }

  &:checked {
    background-color: ${secondary100};
  }

  &:disabled {
    border-color: ${disabledColor};
    background-color: ${disabledColor};
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
    ${({ isRound }) => css`
      width: ${isRound ? '12px' : '10px'};
      height: ${isRound ? '6px' : '5px'};
    `}
  }
`;
