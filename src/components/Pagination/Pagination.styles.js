import styled, { css } from 'styled-components';

import {
  gray150,
  gray100,
  text,
  flexCenter,
  font,
  white,
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
  ${font({ size: '13px', color: text, weight: 'normal' })}

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
      border: solid 1px ${gray100};
      border-radius: 2px;
      background-color: ${white};
    `}

  box-sizing: border-box;
  min-width: 32px;
  height: 32px;
  cursor: pointer;
  line-height: 32px;

  &:focus {
    outline: 0;
  }
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

Numbers.Button = styled.li`
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
`;
