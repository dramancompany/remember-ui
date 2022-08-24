import React from 'react';
import styled, { css } from 'styled-components';

import {
  getTypographyStyles,
  TYPOGRAPHY_STYLES,
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
} from 'core/GlobalStyle';

const RecentContainer = styled.div<{
  typography: keyof typeof TYPOGRAPHY_STYLES;
}>`
  ${({ typography }) => getTypographyStyles(typography)};

  text-align: left;
`;

const DeprecatedContainer = styled.div<{ typo: string }>`
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

export const TableContainer = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 5px;
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.1);
  min-width: 700px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #212322;
`;

export const Title = styled.div`
  ${getTypographyStyles('Headline2_B')};

  margin-bottom: 40px;
`;

export const Td = styled.td`
  border-bottom: 1px solid #ccc;
  vertical-align: top;
  text-align: left;
  padding: 20px 0;
`;

export const Th = styled.th`
  border: 1px solid #646464;
  border-width: 1px 0 1px 0;
  padding: 10px 0;
  text-align: left;
`;

export const TypeItem = ({ typography, children }: Props) => (
  <RecentContainer typography={typography}>{children}</RecentContainer>
);

export const DeprecatedTypeItem = ({ typo }: { typo: string }) => (
  <DeprecatedContainer typo={typo}>{typo}</DeprecatedContainer>
);

interface Props {
  typography: keyof typeof TYPOGRAPHY_STYLES;
  children: React.ReactNode;
}
