import styled from 'styled-components';

import { BaseInput } from '../BaseInput';

import {
  red100,
  text,
  font,
  flexCenterY,
  flexColumnCenterX,
} from '../../../core/GlobalStyle';

export const Container = styled.div<{ $width?: number }>`
  ${flexColumnCenterX}

  width: ${({ $width }) => ($width && `${$width}px`) || '100%'};
`;

export const Inputs = styled.div`
  ${flexCenterY}

  width: 100%;
`;

export const Input = styled(BaseInput)`
  width: 129px;
`;

export const Divider = styled.span`
  ${font({ size: '15px', color: text, weight: 'normal' })}

  position: relative;
  bottom: -12px;
  margin: 0 7px;
`;

export const ErrorMsg = styled.div`
  ${font({ size: '13px', color: red100, weight: 'normal' })}

  width: 100%;
`;
