import styled, { css } from 'styled-components';
import { MoreButtonProps } from '.';

export const Icon = styled.img<Pick<MoreButtonProps, 'size'>>`
  ${({ size }) => css`
    width: ${size === 'large' ? '16px' : '12px'};
    height: ${size === 'large' ? '16px' : '12px'};
    ${size === 'large' &&
    css`
      margin-top: 2px;
    `};
  `}

  display: inline-block;
  cursor: pointer;

  user-select: none;
`;
