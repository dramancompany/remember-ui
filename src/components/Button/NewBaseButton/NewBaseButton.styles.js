import styled, { css } from 'styled-components';
import { disable, flexCenter, contents999 } from '../../../core/GlobalStyle';
import { THEME_COLOR } from '../../../core/GlobalStyle/theme';

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${flexCenter};

  box-sizing: border-box;
  cursor: ${({ isLoading, disabled }) =>
    isLoading || disabled ? 'default' : 'pointer'};

  height: ${({ size }) =>
    (size === 'small' && '32px') ||
    (size === 'medium' && '36px') ||
    (size === 'large' && '44px') ||
    (size === 'xlarge' && '52px')};

  font-size: ${({ size }) =>
    (size === 'small' && '12px') ||
    (size === 'medium' && '14px') ||
    (size === 'large' && '16px') ||
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
  border-radius: 4px;

  border: 1px solid ${({ theme }) => THEME_COLOR[theme].sub};
  background-color: ${({ theme }) => THEME_COLOR[theme].sub};
  color: ${contents999};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ outline }) =>
    outline &&
    css`
      background-color: ${contents999};
      color: ${({ theme }) => THEME_COLOR[theme].main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${contents999};
      border: 1px solid ${disable};
      background-color: ${disable};
    `};

  ${({ disabled, outline }) =>
    disabled &&
    outline &&
    css`
      border-color: ${disable};
      color: ${disable};
      background-color: ${contents999};
    `}
`;
