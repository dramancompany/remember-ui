import type { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import {
  mobileOnly,
  minHeightFix,
  minHeightFixChild,
} from '../../../core/GlobalStyle/mixin';

export const Container = styled.div<{
  direction: CSSProperties['flexDirection'];
}>`
  ${({ direction }) => minHeightFix(direction)}
  ${minHeightFixChild}

  min-width: 1110px;
  max-width: 1110px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  padding: 0 15px;
  height: 100%;

  ${mobileOnly(css`
    min-width: unset;
  `)}
`;
