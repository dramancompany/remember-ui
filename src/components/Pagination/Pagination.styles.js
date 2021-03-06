import styled, { css } from 'styled-components';

import {
  contents00,
  flexCenter,
  font,
  mobileOnly,
  primary02,
  contents03,
  gray150,
} from '../../core/GlobalStyle';

export const Container = styled.ul`
  align-items: center;
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  max-width: 100%;
  padding: 0;
`;

export const List = styled.li``;

export const Button = styled.div`
  ${flexCenter}
  ${font({ size: '14px', color: contents00, weight: 'normal' })}

  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '0px')};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : '0px'};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${gray150};
      cursor: default !important;
    `}

  ${({ selected }) =>
    selected &&
    css`
      border: solid 1px ${contents03};
      border-radius: 4px;
      background-color: ${primary02};
    `}

  box-sizing: border-box;
  min-width: 34px;
  height: 34px;
  cursor: pointer;
  line-height: 34px;

  &:focus {
    outline: 0;
  }

  ${mobileOnly(css`
    min-width: 24px;
    height: 24px;
    line-height: 24px;
  `)}

`;

export const Icon = styled.img.attrs({
  width: 24,
  height: 24,
})`
  position: relative;
  top: 1px;
`;

export const Numbers = styled.span`
  display: inherit;
`;

Numbers.Button = styled.li``;
