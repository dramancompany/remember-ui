import React from 'react';
import styled, { css } from 'styled-components';

import {
  text,
  headline2_B,
  headline3_B,
  headline4_B,
  headline4_M,
  body1_B,
  body1_M,
  body2_B,
  body2_M,
  caption_B,
} from 'remember-ui';

const Container = styled.div`
  margin: 10px 0;
  ${({ typo }) =>
    (typo === 'headline2_B' &&
      css`
        ${headline2_B({ color: text })};
      `) ||
    (typo === 'headline3_B' &&
      css`
        ${headline3_B({ color: text })};
      `) ||
    (typo === 'headline4_B' &&
      css`
        ${headline4_B({ color: text })};
      `) ||
    (typo === 'headline4_M' &&
      css`
        ${headline4_M({ color: text })};
      `) ||
    (typo === 'body1_B' &&
      css`
        ${body1_B({ color: text })};
      `) ||
    (typo === 'body1_M' &&
      css`
        ${body1_M({ color: text })};
      `) ||
    (typo === 'body2_B' &&
      css`
        ${body2_B({ color: text })};
      `) ||
    (typo === 'body2_M' &&
      css`
        ${body2_M({ color: text })};
      `) ||
    (typo === 'caption_B' &&
      css`
        ${caption_B({ color: text })};
      `)}
`;

export const Title = styled.div`
  ${headline2_B({ color: text })};

  margin: 0 0 20px;
  padding: 10px 0px;
  border-bottom: 1px solid ${text};
`;

export const TypeItem = ({ typo, children, ...rest }) => (
  <Container typo={typo} {...rest}>
    {children}
  </Container>
);

export const TypeMobileItem = ({ typo, children, ...rest }) => (
  <Container typo={typo} {...rest}>
    {typo}
    <br />
    {children}
  </Container>
);
