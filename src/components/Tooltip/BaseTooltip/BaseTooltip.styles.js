import styled, { css } from 'styled-components';
import Tippy from '@tippy.js/react';

export const Icon = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const Tooltip = styled(Tippy)`
  border-radius: ${({ _size = 'small' }) => (_size ? '2px' : '6px')} !important;

  .tippy-content {
    text-align: ${({ _textAlign }) => _textAlign};
    ${({ _size = 'small' }) =>
      _size === 'small'
        ? css`
            border-radius: 2px;
            font-size: 12px;
            text-align: center;
            padding: 2px 6px !important;
          `
        : css`
            border-radius: 6px;
            font-size: 13px;
            padding: 10px 18px !important;
          `}
  }
`;
