import styled, { css } from 'styled-components';
import {
  white,
  gray100,
  gray120,
  gray200,
  gray450,
  yellow100,
  red100,
  flexCenter,
} from '../../../core/GlobalStyle';

const THEME_COLOR = {
  yellow: {
    main: yellow100,
    sub: yellow100,
  },
  red: {
    main: red100,
    sub: red100,
  },
  gray: {
    main: gray200,
    sub: gray200,
  },
  light: {
    main: gray450,
    sub: gray100,
  },
};

export const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

export const Container = styled.div`
  ${flexCenter};

  box-sizing: border-box;
  cursor: ${({ isLoading, disabled }) =>
    isLoading || disabled ? 'default' : 'pointer'};

  height: ${({ size }) =>
    (size === 'small' && '32px') ||
    (size === 'medium' && '36px') ||
    (size === 'large' && '40px') ||
    (size === 'xlarge' && '48px')};

  font-size: ${({ size }) =>
    (size === 'small' && '13px') ||
    (size === 'medium' && '14px') ||
    (size === 'large' && '15px') ||
    (size === 'xlarge' && '16px')};

  min-width: ${({ size }) =>
    (size === 'small' && '68px') ||
    (size === 'medium' && '78px') ||
    (size === 'large' && '108px') ||
    (size === 'xlarge' && '116px')};

  padding: ${({ size }) =>
    (size === 'small' && '0 16px') ||
    (size === 'medium' && '0 20px') ||
    (size === 'large' && '0 20px') ||
    (size === 'xlarge' && '0 24px')};

  font-weight: 400;
  border-radius: ${({ size }) => (size === 'small' ? '2px' : '4px')};

  border: 1px solid ${({ theme }) => THEME_COLOR[theme].sub};
  background-color: ${({ theme }) => THEME_COLOR[theme].sub};
  color: ${white};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ outline }) =>
    outline &&
    css`
      background-color: ${white};
      color: ${({ theme }) => THEME_COLOR[theme].main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${white};
      border: 1px solid ${gray120};
      background-color: ${gray120};
    `};

  ${({ disabled, outline }) =>
    disabled &&
    outline &&
    css`
      border-color: ${gray100};
      color: ${gray120};
      background-color: ${white};
    `}
`;
