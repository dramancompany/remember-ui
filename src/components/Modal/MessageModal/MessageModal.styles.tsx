import styled, { css } from 'styled-components';

import { bg100, mobileOnly } from '../../../core/GlobalStyle';
import { NewBaseButton } from '../../Buttons';

export const Content = styled.div`
  background-color: ${bg100};
  padding: 24px;
  border-radius: 8px;
  width: 360px;
  box-sizing: border-box;

  ${mobileOnly(css`
    width: calc(100vw - 48px);
  `)};
`;

export const Body = styled.div``;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const CancelButton = styled(NewBaseButton)`
  margin-right: 8px;
`;
