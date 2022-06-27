import styled, { css } from 'styled-components';
import {
  contents999,
  contents300,
  flexCenter,
} from '../../../core/GlobalStyle';
import type { CustomButtonStyleProps } from './CustomButton.types';

const CUSTOM_BUTTON_SIZES = {
  small: {
    fontSize: '13px',
    height: '32px',
    minWidth: '68px',
    padding: '0 16px',
  },
  medium: {
    fontSize: '13px',
    height: '36px',
    minWidth: '78px',
    padding: '0 20px',
  },
  large: {
    fontSize: '14px',
    height: '40px',
    minWidth: '108px',
    padding: '0 20px',
  },
  xlarge: {
    fontSize: '15px',
    height: '48px',
    minWidth: '116px',
    padding: '0 24px',
  },
} as const;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div<CustomButtonStyleProps>`
  ${flexCenter};

  box-sizing: border-box;

  ${({ size }) => css`
    height: ${CUSTOM_BUTTON_SIZES[size].height};
    font-size: ${CUSTOM_BUTTON_SIZES[size].fontSize};
    min-width: ${CUSTOM_BUTTON_SIZES[size].minWidth};
    padding: ${CUSTOM_BUTTON_SIZES[size].padding};
    border-radius: ${size === 'small' ? '2px' : '4px'};
  `};

  ${({ customStyle }) => css`
    font-weight: ${customStyle.fontWeight};
    border: 1px solid ${customStyle.borderColor};
    background-color: ${customStyle.backgroundColor};
    color: ${customStyle.fontColor};
  `};

  ${({ block, disabled, outline, isLoading }) => [
    block &&
      css`
        width: 100%;
      `,
    disabled &&
      css`
        color: ${contents999};
        border: 1px solid ${contents300};
        background-color: ${contents300};
      `,
    disabled &&
      outline &&
      css`
        color: ${contents300};
        border-color: ${contents300};
        background-color: ${contents999};
      `,
    css`
      cursor: ${isLoading || disabled ? 'default' : 'pointer'};
    `,
  ]}
`;
