import styled, { css } from 'styled-components';

import {
  white,
  gray120,
  gray400,
  mobileBody13,
  mobileBody15,
  flexContainer,
} from '../../../core/GlobalStyle';
import { Checkbox } from '../Checkbox';

export const Container = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  ${flexContainer('flex-start', 'center', 'column')};

  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${white};
`;

export const Item = styled.div`
  width: 100%;
  display: block;

  ${({ hasToggled }) =>
    !hasToggled &&
    css`
      &:first-child > .inner {
        height: ${({ height = 'auto' }) => `${height}`};
      }
    `}
`;

Item.Title = styled.label`
  ${mobileBody15({ color: gray400 })};

  display: block;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 16px;
  box-shadow: inset 0 -0.5px 0 0 ${gray120};
  background-color: #efefef;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

Item.Checker = styled.input.attrs({
  type: 'radio',
})`
  display: none;
  &:checked + .inner {
    height: ${({ height = 'auto' }) => `${height}`};
  }
`;

Item.Inner = styled.div`
  transition: all 0.3s;
  height: 0px;
  overflow: hidden;
`;

Item.Inner.Title = styled.div`
  ${mobileBody13({ color: gray400 })};
  ${flexContainer('flex-start', 'center')};

  width: 100%;
  height: 48px;
  padding: 17px 16px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

Item.Inner.Checkbox = styled(Checkbox)`
  margin-right: 5px;
`;
