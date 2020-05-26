import styled, { css } from 'styled-components';

import {
  gray50,
  gray100,
  gray120,
  gray200,
  gray400,
  gray450,
  blue100,
  red100,
  yellow100,
  gold100,
  white,
} from '../../../core/GlobalStyle';
import { flexCenter, textSmall } from '../../../core/GlobalStyle';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

export const Container = styled.div`
  ${flexCenter};
  ${textSmall({ weight: 400 })};

  border: 1px solid ${gray450};
  box-sizing: border-box;
  cursor: pointer;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  height:  ${({ size }) =>
    (size === 'small' && '32px') ||
    (size === 'medium' && '36px') ||
    (size === 'large' && '48px') ||
    (size === 'xlarge' && '52px')};

  font-size: ${({ size }) =>
    (size === 'small' && '13px') ||
    (size === 'large' && '15px') ||
    (size === 'xlarge' && '16px')};

  font-weight: ${({ size }) => size === 'xlarge' && 'bold'};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 4px;

      &.small {
        border-radius: 2px;
      }
    `}

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
        background-color: ${white} !important;
      }
    `}

  ${({ disabled, fillColor }) =>
    disabled &&
    fillColor &&
    css`
      color: ${white} !important;
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
  color: ${gray450};
  background-color: ${white};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${gray450};
      background-color: ${gray450};
    `}

  ${({ large }) =>
    large &&
    css`
      &:hover {
        background-color: ${gray50};
      }
    `}

  ${({ fillColor, large }) =>
    fillColor &&
    large &&
    css`
      &:hover {
        background-color: ${gray450};
        opacity: 0.8;
      }
    `}
`;

export const YellowButton = styled(Container)`
  border-color: ${yellow100};
  color: ${yellow100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${yellow100};
      background-color: ${yellow100};
    `}

  ${({ large }) =>
    large &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const LightYellowButton = styled(Container)`
  border-color: ${gold100};
  color: ${gold100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
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
      color: ${white};
      border-color: ${gray200};
      background-color: ${gray200};
    `}

  ${({ fillColor, large }) =>
    fillColor &&
    large &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const BlueButton = styled(Container)`
  border-color: ${blue100};
  color: ${blue100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${blue100};
      background-color: ${blue100};
    `}
`;

export const RedButton = styled(Container)`
  border-color: ${red100};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${red100};
      background-color: ${red100};
    `}

  ${({ fillColor, large }) =>
    fillColor &&
    large &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const LiteButton = styled(Container)`
  border-color: ${yellow100};
  color: ${gray400};
  background-color: ${white};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${yellow100};
      background-color: ${yellow100};
    `}
`;

export const PlusButton = styled(Container)`
  border-color: ${red100};
  color: ${gray400};
  background-color: ${white};

  ${({ fillColor }) =>
    fillColor &&
    css`
      color: ${white};
      border-color: ${red100};
      background-color: ${red100};
    `}
`;
