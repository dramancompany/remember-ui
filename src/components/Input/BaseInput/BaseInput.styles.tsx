import styled, { css } from 'styled-components';

import {
  placeholderColor,
  gray50,
  gray100,
  gray150,
  gray400,
  mobileOnly,
  mobileSubTitle13,
  contents100,
  roleRed,
  secondary100,
  getTypographyStyles,
} from '../../../core/GlobalStyle';

export const Container = styled.div``;

export const Label = styled.div<{ $marginBottom?: number }>`
  ${getTypographyStyles('Body1_M')}
  color: ${contents100};

  display: flex;
  align-items: center;
  margin-bottom: ${({ $marginBottom = 8 }) => `${$marginBottom}px`};
  min-height: 20px;
`;

export const RequiredMark = styled.span`
  margin-left: 4px;
  background: ${secondary100};
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export const ErrorMessage = styled.div`
  ${getTypographyStyles('Body2_M')}
  color: ${roleRed};
  margin-top: 8px;
`;

export const Input = styled.input<{
  error?: boolean;
  footer?: boolean;
  disable?: boolean;
}>`
  ${getTypographyStyles('Body1_M')}
  color: ${gray400};
  ${placeholderColor(gray150)}

  height: 44px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${gray100};
  padding: 11px 12px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 1px solid ${gray150};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${roleRed};
    `}

  ${({ footer }) =>
    footer &&
    css`
      margin-bottom: 10px;
    `}

  ${({ disable }) =>
    disable &&
    css`
      background-color: ${gray50};
      color: ${gray150};
      cursor: default;

      &:focus {
        border: 1px solid ${gray100};
      }
    `}

  ${mobileOnly(css`
    ${mobileSubTitle13({ color: gray400, weight: 'normal' })};

    padding: 10px;
  `)};
`;
