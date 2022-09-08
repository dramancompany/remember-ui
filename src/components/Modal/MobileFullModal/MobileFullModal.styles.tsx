import styled, { css } from 'styled-components';

import { BaseModal } from '../BaseModal';
import { NewBaseButton } from '../../Buttons';
import { closeIcon } from '../../../assets';
import {
  textEllipsis,
  white,
  gray70,
  gray120,
  gray450,
  flexCenterY,
  flexContainer,
  mobileBody12,
  mobileSubTitle12,
  mobileSubTitle14,
  mobileSubTitle16,
} from '../../../core/GlobalStyle';

export const Container = styled(BaseModal)`
  position: relative;
`;

export const Modal = styled.div<{ topNavbarOffset: string }>`
  ${({ topNavbarOffset }) => css`
    top: ${topNavbarOffset};
    height: calc(100% - ${topNavbarOffset});
  `}

  background-color: ${white};
  position: fixed;
  left: 0;
  width: 100vw;
  z-index: 1;
`;

export const Header = styled.div`
  ${flexCenterY};

  background-color: ${gray450};
  position: relative;
  justify-content: space-between;
  padding: 16px 0px;
  height: 16px;
`;

export const HeaderLeft = styled.div`
  width: 90px;
  max-width: 90px;
  text-align: left;
`;

export const HeaderLeftIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'close',
})`
  color: ${white};

  box-sizing: content-box;
  width: 14px;
  height: 14px;
  padding: 10px 10px 10px 16px;
  vertical-align: middle;
`;

export const HeaderTitle = styled.div`
  ${flexContainer('center', 'flex-start', 'column')};

  // 좌우 영역 각각 90px
  width: calc(100vw - 180px);
  max-width: calc(100vw - 180px);
  text-align: center;
`;

export const HeaderTitleText = styled.div`
  ${mobileSubTitle16({ color: white })};
  ${textEllipsis};

  width: 100%;
`;

export const HeaderSubTitle = styled.div`
  ${mobileSubTitle12({ color: '#999' })};
  ${flexContainer('center', 'center')};

  width: 100%;
`;

export const HeaderSubTitleText = styled.div`
  ${mobileSubTitle12({ color: '#999' })};
  ${textEllipsis};
`;

export const HeaderRight = styled.div`
  width: 90px;
  max-width: 90px;
  text-align: right;
`;

export const HeaderRightButton = styled.span`
  ${mobileBody12({ color: white })};

  padding: 10px 15px 10px 5px;
`;

export const Body = styled.div`
  width: 100%;

  height: calc(100% - 48px);
`;

export const BodyMain = styled.div<{ hasFooter?: boolean }>`
  height: ${({ hasFooter }) => (hasFooter ? `calc(100% - 72px)` : `100%`)};

  overflow-y: auto;
`;

export const Footer = styled.div`
  ${flexCenterY};

  width: 100%;

  box-shadow: inset 0 1px 0 0 ${gray120};
  background-color: ${gray70};
  box-sizing: border-box;
  justify-content: space-between;
  padding: 15px;
  height: 72px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Button = styled(NewBaseButton)`
  ${mobileSubTitle14({ color: white })};

  height: 42px;
`;
