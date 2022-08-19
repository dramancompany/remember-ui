import styled, { css } from 'styled-components';

import {
  accent200,
  flexCenter,
  gold100,
  gray100,
  gray120,
  gray200,
  gray400,
  red100,
  contents999,
  yellow100,
} from '../../../core/GlobalStyle';
import type { BaseButtonStyleType } from './BaseButton.types';

const BASE_BUTTON_SIZES = {
  small: {
    fontSize: '13px',
    fontWeight: 400,
    height: '32px',
  },
  medium: {
    fontSize: '14px',
    fontWeight: 400,
    height: '36px',
  },
  large: {
    fontSize: '15px',
    fontWeight: 'bold',
    height: '48px',
  },
  xlarge: {
    fontSize: '16px',
    fontWeight: 'bold',
    height: '52px',
  },
} as const;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

export const Container = styled.div<BaseButtonStyleType>`
  ${flexCenter};

  border: 1px solid ${gray400};
  box-sizing: border-box;
  cursor: pointer;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ size, rounded }) => css`
    height: ${BASE_BUTTON_SIZES[size].height};
    font-weight: ${BASE_BUTTON_SIZES[size].fontWeight};
    font-size: ${BASE_BUTTON_SIZES[size].fontSize};
    border-radius: ${rounded ? (size === 'small' ? '2px' : '4px') : 0};
  `};

  ${({ borderless }) =>
    borderless &&
    css`
      border: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${gray100} !important;
      color: ${gray120} !important;

      cursor: default;

      &:hover {
        background-color: ${contents999} !important;
      }
    `}

  ${({ disabled, fillColor }) =>
    disabled &&
    fillColor &&
    css`
      color: ${contents999} !important;
      border: 1px solid ${gray120} !important;
      background-color: ${gray120} !important;

      cursor: default;

      &:hover {
        background-color: ${gray120} !important;
        opacity: 1 !important;
      }
    `}
`;

export const BlackButton = styled(Container)`
  border-color: ${gray100};
  color: ${gray400};
  background-color: ${contents999};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${gray400};
      background-color: ${gray400};
    `}
`;

export const YellowButton = styled(Container)`
  border-color: ${yellow100};
  color: ${yellow100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${yellow100};
      background-color: ${yellow100};
    `}
`;

export const LightYellowButton = styled(Container)`
  border-color: ${gold100};
  color: ${gold100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${gold100};
      background-color: ${gold100};
    `}
`;

export const GrayButton = styled(Container)`
  border-color: ${gray200};
  color: ${gray200};
  background-color: ${gray200};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${gray200};
      background-color: ${gray200};
    `}
`;

export const BlueButton = styled(Container)`
  border-color: ${accent200};
  color: ${accent200};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${accent200};
      background-color: ${accent200};
    `}
`;

export const RedButton = styled(Container)`
  border-color: ${red100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${red100};
      background-color: ${red100};
    `}
`;

export const LiteButton = styled(Container)`
  border-color: ${yellow100};
  color: ${gray400};
  background-color: ${contents999};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${yellow100};
      background-color: ${yellow100};
    `}
`;

export const PlusButton = styled(Container)`
  border-color: ${red100};
  color: ${gray400};
  background-color: ${contents999};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${contents999};
      border-color: ${red100};
      background-color: ${red100};
    `}
`;
