import styled, { css } from 'styled-components';

import {
  textSmall,
  font,
  gray200,
  gray100,
  white,
  text,
  gray50,
  gray150,
  yellow100,
} from '../../../core/GlobalStyle';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.div`
  ${textSmall({ color: gray200 })}
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : '6px'};
`;

Label.Text = styled.span``;

Label.Mark = styled.img`
  margin-left: 4px;
  position: relative;
  top: 1px;
  width: 6px;
  height: 6px;
`;

export const Selected = styled.div`
  ${font({ size: '15px', color: text })}

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 42px;
  padding: 11px 12px;
  align-items: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

Selected.Unselected = styled.span`
  color: ${gray150};
`;

export const Content = styled.div`
  border-radius: 4px;
  border: 1px solid ${gray100};
  background-color: ${white};

  ${({ active }) =>
    active &&
    css`
      border-radius: 0;
      border-left: 1px solid ${gray100};
      border-right: 1px solid ${gray100};
      border-top: 1px solid ${gray100};
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      height: 44px;
    `}

  ${({ isFixed }) =>
    isFixed &&
    css`
      background-color: ${gray50};

      ${Selected} {
        color: ${gray150};
        cursor: default;
      }
    `}
`;

export const Options = styled.div`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '300px')};
  overflow-y: auto;

  ${({ active }) =>
    active &&
    css`
      position: absolute;
      width: 100%;
      background-color: ${white};
      border: 1px solid ${gray100};
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      right: 0px;
      box-sizing: border-box;
      border-top: none;
      z-index: 300;
    `}
`;

export const OptionItem = styled.div`
  box-sizing: border-box;
  height: 44px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  ${font({ size: '15px', color: text })}

  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: #f9f9f9;
    `}
  ${({ custom }) =>
    custom && font({ size: '15px', weight: 'bold', color: yellow100 })}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      opacity: 0.3;
    `}
`;
