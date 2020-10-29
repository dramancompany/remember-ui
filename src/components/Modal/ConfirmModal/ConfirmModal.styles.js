import styled, { css } from 'styled-components';

import {
  flexCenterY,
  textExtraLarge,
  textMedium,
  textSmall,
  textBreakPre,
  gray200,
  text,
  mobileOnly,
} from '../../../core/GlobalStyle';

export const Container = styled.div`
  width: 400px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: white;

  ${mobileOnly(css`
    min-width: ${({ mobileWidth }) =>
      (mobileWidth && `${mobileWidth}`) || '90vw'};
    max-width: ${({ mobileWidth }) =>
      (mobileWidth && `${mobileWidth}`) || '90vw'};
    ${({ mobileHeight }) =>
      mobileHeight &&
      css`
        height: ${mobileHeight};
      `}
  `)}
`;

export const Body = styled.div`
  ${flexCenterY};
  flex-direction: column;
  padding: 48px 20px;
  box-sizing: border-box;
`;

export const Icon = styled.img`
  width: 44px;
  height: 44px;
  margin-bottom: 12px;
`;

export const TitleText = styled.div`
  ${({ hasIcon }) =>
    hasIcon
      ? textExtraLarge({ weight: 'bold', color: text })
      : textMedium({ weight: 'bold', color: text })};
  ${textBreakPre};

  width: 100%;
  text-align: center;
`;

export const MessageText = styled.div`
  ${textSmall({ color: gray200 })};
  ${textBreakPre};

  width: 100%;
  margin-top: 8px;
  text-align: center;
`;

export const Footer = styled.div`
  ${flexCenterY};

  padding: 12px 9px;
  border-top: 1px solid #eee;

  & > .footer--btn {
    width: ${({ showClose }) => (showClose ? '50%' : '100%')};
    margin: 0 3px;
  }
`;
