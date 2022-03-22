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
  mobileTitle,
  mobileSubTitle16,
  mobileSubTitle14,
  mobileSubTitle13,
  mobileSubTitle12,
  mobileBody15,
  mobileBody13,
  mobileBody12,
  mobileSubCaption,
} from 'remember-ui';

const Container = styled.div`
  margin: 10px 0;
  ${({ typo }) =>
    (typo === 'textExtraSmall' &&
      css`
        ${textExtraSmall({ color: text })};
      `) ||
    (typo === 'textSmall' &&
      css`
        ${textSmall({ color: text })};
      `) ||
    (typo === 'textMedium' &&
      css`
        ${textMedium({ color: text })};
      `) ||
    (typo === 'textLarge' &&
      css`
        ${textLarge({ color: text })};
      `) ||
    (typo === 'textExtraLarge' &&
      css`
        ${textExtraLarge({ color: text })};
      `) ||
    (typo === 'textDoubleExtraLarge' &&
      css`
        ${textDoubleExtraLarge({ color: text })};
      `) ||
    (typo === 'textTripleExtraLarge' &&
      css`
        ${textTripleExtraLarge({ color: text })};
      `) ||
    (typo === 'mobileTitle' &&
      css`
        ${mobileTitle({ color: text })};
      `) ||
    (typo === 'mobileSubTitle16' &&
      css`
        ${mobileSubTitle16({ color: text })};
      `) ||
    (typo === 'mobileSubTitle14' &&
      css`
        ${mobileSubTitle14({ color: text })};
      `) ||
    (typo === 'mobileSubTitle13' &&
      css`
        ${mobileSubTitle13({ color: text })};
      `) ||
    (typo === 'mobileSubTitle12' &&
      css`
        ${mobileSubTitle12({ color: text })};
      `) ||
    (typo === 'mobileBody15' &&
      css`
        ${mobileBody15({ color: text })};
      `) ||
    (typo === 'mobileBody13' &&
      css`
        ${mobileBody13({ color: text })};
      `) ||
    (typo === 'mobileBody12' &&
      css`
        ${mobileBody12({ color: text })};
      `) ||
    (typo === 'mobileSubCaption' &&
      css`
        ${mobileSubCaption({ color: text })};
      `) ||
    (typo === 'font' &&
      css`
        ${font({ color: text })};
      `)}
`;

export const Title = styled.div`
  ${textTripleExtraLarge({ color: text })};

  margin: 0 0 20px;
  padding: 10px 0px;
  border-bottom: 1px solid ${text};
`;

export const TypeItem = ({ typo, ...rest }) => (
  <Container typo={typo} {...rest}>
    {typo}
  </Container>
);

export const TypeMobileItem = ({ typo, children, ...rest }) => (
  <Container typo={typo} {...rest}>
    {typo}
    <br />
    {children}
  </Container>
);
