import styled, { css } from 'styled-components';
import Tippy from '@tippy.js/react';

const SIZE_TO_WIDTH_MAP = {
  small: '170px',
  large: '236px',
  auto: 'auto',
};

export const Popover = styled(Tippy)`
  border-radius: 10px !important;
  background-color: white !important;
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2) !important;
  width: ${({ $size = 'small' }) => SIZE_TO_WIDTH_MAP[$size]} !important;

  .tippy-content {
    padding: 0 !important;
  }
`;

export const Content = styled.div`
  ${({ customElement }) =>
    customElement
      ? css`
          padding-bottom: 12px;
        `
      : css`
          padding: 12px 0;
        `}
`;
