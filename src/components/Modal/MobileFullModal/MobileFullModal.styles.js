import styled from 'styled-components';

import { BaseModal } from '../BaseModal';
import { NewBaseButton } from '../../Button';
import { closeIcon } from '../../../assets';

import {
  white,
  gray70,
  gray120,
  gray450,
  flexCenterY,
  mobileBody12,
  mobileSubTitle14,
  mobileSubTitle16,
} from '../../../core/GlobalStyle';

export const Container = styled(BaseModal)`
  position: relative;
`;

export const Modal = styled.div`
  top: ${({ topNavbarOffset }) => topNavbarOffset && `${topNavbarOffset}`};
  height: ${({ topNavbarOffset }) =>
    topNavbarOffset && `calc(100% - ${topNavbarOffset})`};
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

Header.Left = styled.div`
  min-width: 25%;
  text-align: left;
`;

Header.Left.Icon = styled.img.attrs({
  width: 14,
  height: 14,
  src: closeIcon,
  alt: 'close',
})`
  color: ${white};

  padding: 10px 10px 10px 16px;
  vertical-align: middle;
`;

Header.Title = styled.span`
  ${mobileSubTitle16({ color: white })};

  min-width: 50%;
  text-align: center;
`;

Header.Right = styled.div`
  min-width: 25%;
  text-align: right;
`;

Header.Right.Button = styled.span`
  ${mobileBody12({ color: white })};

  padding: 10px 15px 10px 5px;
`;

export const Body = styled.div`
  width: 100%;

  height: ${({ topNavbarOffset }) =>
    topNavbarOffset && `calc(100% - 48px - ${topNavbarOffset})`};
`;

Body.Main = styled.div`
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
