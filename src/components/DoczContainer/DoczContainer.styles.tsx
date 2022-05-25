import type { CSSProperties } from 'react';
import styled from 'styled-components';
import { minHeightFix, minHeightFixChild } from '../../core/GlobalStyle/mixin';

export const Container = styled.div<{
  direction: CSSProperties['flexDirection'];
}>`
  ${({ direction }) => minHeightFix(direction || 'column')}
  ${minHeightFixChild}

  margin-left: auto;
  margin-right: auto;
  align-self: center;
  padding: 20px;
  height: 100%;

  align-items: center;
  > div,
  > a,
  > img {
    margin: 0px 10px;
  }
`;
