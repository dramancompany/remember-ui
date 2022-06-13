import styled from 'styled-components';
import { MoreButtonProps } from '.';

export const Icon = styled.img<Pick<MoreButtonProps, 'size'>>`
  width: ${({ size }) => size === 'large' && '16px'};
  height: ${({ size }) => size === 'large' && '16px'};
  margin-top: ${({ size }) => size === 'large' && '2px'};

  display: inline-block;
  cursor: pointer;

  user-select: none;
`;
