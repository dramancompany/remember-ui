import styled, { css } from 'styled-components';
import Tippy from '@tippyjs/react';

export const Popover = styled(Tippy)`
  border-radius: 10px !important;
  background-color: white !important;
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.2) !important;
  width: ${({ size = 'small' }) =>
    size === 'small' ? '170px' : '236px'} !important;

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
