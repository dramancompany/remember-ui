import React from 'react';
import styled from 'styled-components';

import { text, getTypographyStyles } from 'remember-ui';

const Container = styled.div`
  margin: 10px 0;
  ${({ typography }) => getTypographyStyles(typography)};
`;

export const Title = styled.div`
  ${getTypographyStyles('Headline2_B')};

  margin: 0 0 20px;
  padding: 10px 0px;
  border-bottom: 1px solid ${text};
`;

export const TypeItem = ({ typography, children, ...rest }) => (
  <Container typography={typography} {...rest}>
    {children}
  </Container>
);

export const TypeMobileItem = ({ typography, children, ...rest }) => (
  <Container typography={typography} {...rest}>
    {typography}
    <br />
    {children}
  </Container>
);
