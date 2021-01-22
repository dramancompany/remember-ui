import styled, { css } from 'styled-components';

import { BaseModal } from '../BaseModal';
import { BaseButton } from '../../Button';

import {
  white,
  gray80,
  gray200,
  text,
  flexCenterY,
  textSmall,
  textDoubleExtraLarge,
  mobileOnly,
  mobileSubTitle16,
  mobileSubTitle14,
  mobileSubTitle13,
} from '../../../core/GlobalStyle';

export const Container = styled(BaseModal)`
  ${mobileOnly(css`
    min-width: 90vw;
    max-width: 90vw;
  `)}

  border-radius: 10px;
`;

export const Modal = styled.div`
  background-color: ${white};
  border-radius: 10px;
  width: 635px;

  ${({ isDraggable }) =>
    isDraggable &&
    css`
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    `}

  ${mobileOnly(css`
    min-width: ${({ mobileWidth }) =>
      (mobileWidth && `${mobileWidth}`) || '90vw'};
    max-width: ${({ mobileWidth }) =>
      (mobileWidth && `${mobileWidth}`) || '90vw'};
    ${({ mobileHeight }) =>
      mobileHeight &&
      css`
        min-height: ${mobileHeight};
        max-height: ${mobileHeight};
      `}
  `)};
`;

Modal.Header = styled.div`
  ${flexCenterY};

  justify-content: space-between;
  padding: 24px 30px;

  ${mobileOnly(css`
    padding: 15px;
  `)};
`;

Modal.Header.Content = styled.div``;

Modal.Body = styled.div`
  max-height: 60vh;
  overflow-y: auto;
`;

Modal.Footer = styled.div`
  ${flexCenterY}

  box-shadow: inset 0 1px 0 0 ${gray80};
  box-sizing: border-box;
  justify-content: space-between;
  padding: 12px 30px;
  height: 72px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  .clear-filter {
    ${textSmall({ color: gray200 })}
    ${flexCenterY}

    cursor: pointer;

    .refresh {
      width: 12px;
      height: 12px;
      margin-right: 4px;
      margin-top: 2px;
    }
  }

  .info-msg {
    ${textSmall({ color: gray200 })}
    ${flexCenterY}
  }

  ${mobileOnly(css`
    padding: 12px;
  `)};
`;

export const Title = styled.span`
  ${textDoubleExtraLarge({ weight: 'bold', color: text })}
  margin-right: 8px;
  letter-spacing: -1px;

  ${mobileOnly(css`
    ${mobileSubTitle16({ color: text })};
  `)};
`;

export const SubTitle = styled.span`
  ${textSmall({ color: gray200 })};

  ${mobileOnly(css`
    ${mobileSubTitle13({ weight: 'normal', color: gray200 })};
  `)};
`;

export const Block = styled.div`
  margin-right: auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  ${mobileOnly(css`
    width: 100%;
    justify-content: space-between;
  `)};
`;

export const Button = styled(BaseButton)`
  width: 116px;

  &:last-child {
    margin-left: 6px;
  }

  ${mobileOnly(css`
    ${mobileSubTitle14({ color: white })};

    width: 50%;
  `)};
`;
