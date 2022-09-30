import styled, { css } from 'styled-components';

import { NewBaseButton } from 'components/Buttons';
import {
  background100,
  contents200,
  contents300,
  flexCenterY,
  getTypographyStyles,
  mobileOnly,
} from 'core/GlobalStyle';
import { BaseModal } from '../BaseModal';

export const Container = styled(BaseModal)`
  ${mobileOnly(css`
    min-width: 90vw;
    max-width: 90vw;
  `)}

  border-radius: 10px;
`;

export const Modal = styled.div<{
  isDraggable?: boolean;
  mobileWidth?: number | string;
  mobileHeight?: number | string;
}>`
  background-color: ${background100};
  border-radius: 10px;
  width: 635px;

  ${({ isDraggable }) =>
    isDraggable &&
    css`
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    `}

  ${({ mobileWidth, mobileHeight }) =>
    mobileOnly(css`
      min-width: ${mobileWidth ?? '90vw'};
      max-width: ${mobileWidth ?? '90vw'};
      ${mobileHeight
        ? css`
            min-height: ${mobileHeight};
            max-height: ${mobileHeight};
          `
        : ''}
    `)}
`;

export const ModalHeader = styled.div`
  ${flexCenterY};

  justify-content: space-between;
  padding: 24px 30px;

  ${mobileOnly(css`
    padding: 15px;
  `)};
`;

export const ModalHeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalBody = styled.div`
  max-height: 60vh;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  ${flexCenterY}

  box-shadow: inset 0 1px 0 0 ${contents300};
  box-sizing: border-box;
  justify-content: space-between;
  padding: 12px 30px;
  height: 72px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  .clear-filter {
    ${getTypographyStyles('Body1_M')}
    color: ${contents200};
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
    ${getTypographyStyles('Body1_M')}
    color: ${contents200};
    ${flexCenterY}
  }

  ${mobileOnly(css`
    padding: 12px;
  `)};
`;

export const Title = styled.h3`
  ${getTypographyStyles('Headline3_B')}
  margin: 0;
  margin-right: 8px;
  letter-spacing: -1px;

  ${mobileOnly(css`
    ${getTypographyStyles('Body1_B')}
  `)};
`;

export const SubTitle = styled.span`
  ${getTypographyStyles('Body1_M')}
  color: ${contents200};

  ${mobileOnly(css`
    ${getTypographyStyles('Body2_M')}
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

export const Button = styled(NewBaseButton)<{ buttonCount?: number }>`
  &:last-child {
    margin-left: 6px;
  }

  ${({ buttonCount = 1 }) =>
    mobileOnly(css`
      width: ${buttonCount === 2 ? '50%' : '100%'};

      ${buttonCount !== 2 &&
      css`
        &:last-child {
          margin-left: 0px;
        }
      `}
    `)}
`;
