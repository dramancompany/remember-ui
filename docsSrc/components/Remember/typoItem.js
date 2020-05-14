import React from 'react';
import styled, { css } from 'styled-components';

import {
  text,
  font,
  textExtraSmall,
  textSmall,
  textMedium,
  textLarge,
  textExtraLarge,
  textDoubleExtraLarge,
  textTripleExtraLarge,
} from 'remember-ui';

const Container = styled.div`
  margin: 4px 0;
  ${({ typo }) =>
    (typo === 'textExtraSmall' &&
      css`
        ${textExtraSmall({ color: text })}
      `) ||
    (typo === 'textSmall' &&
      css`
        ${textSmall({ color: text })}
      `) ||
    (typo === 'textMedium' &&
      css`
        ${textMedium({ color: text })}
      `) ||
    (typo === 'textLarge' &&
      css`
        ${textLarge({ color: text })}
      `) ||
    (typo === 'textExtraLarge' &&
      css`
        ${textExtraLarge({ color: text })}
      `) ||
    (typo === 'textDoubleExtraLarge' &&
      css`
        ${textDoubleExtraLarge({ color: text })}
      `) ||
    (typo === 'textTripleExtraLarge' &&
      css`
        ${textTripleExtraLarge({ color: text })}
      `) ||
    (typo === 'font' &&
      css`
        ${font({ color: text })}
      `)};
`;

export const TypeItem = ({ typo, ...rest }) => (
  <Container typo={typo} {...rest}>
    {typo}
  </Container>
);
