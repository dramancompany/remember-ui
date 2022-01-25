import styled, { css } from 'styled-components';

import {
  textSmall,
  font,
  contents000,
  contents100,
  contents200,
  contents300,
  primary200,
  background200,
  yellow100,
  mobileOnly,
  textEllipsis,
  accent100,
} from '../../../core/GlobalStyle';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.div`
  ${textSmall({ color: contents100 })};

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
  ${font({ size: '15px', color: contents000 })};

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

  ${mobileOnly(css`
    ${font({ size: '13px', color: contents000 })};
    height: 36px;
    padding: 11px 10px;
  `)};
`;

Selected.Text = styled.div`
  ${textEllipsis};

  width: 95%;
`;

Selected.Unselected = styled.span`
  color: ${contents200};
`;

export const Content = styled.div`
  border-radius: 4px;
  border: 1px solid ${contents300};
  background-color: ${primary200};

  ${({ error }) =>
    error &&
    css`
      border-color: ${accent100};
    `}

  ${({ active }) =>
    active &&
    css`
      border-radius: 0;
      border-left: 1px solid ${contents300};
      border-right: 1px solid ${contents300};
      border-top: 1px solid ${contents300};
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      height: 42px;
    `}

  ${({ isFixed }) =>
    isFixed &&
    css`
      background-color: ${background200};

      ${Selected} {
        color: ${contents200};
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
      background-color: ${primary200};
      border: 1px solid ${contents300};
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      right: 0px;
      box-sizing: border-box;
      border-top: none;
      z-index: 300;
    `}
`;

export const OptionItem = styled.div`
  ${font({ size: '15px', color: contents000 })};

  box-sizing: border-box;
  height: 42px;
  padding: 11px 12px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${background200};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${background200};
    `}
  ${({ custom }) =>
    custom && font({ size: '15px', weight: 'bold', color: yellow100 })}
  ${({ disable }) =>
    disable &&
    css`
      cursor: default;
      opacity: 0.3;
    `}


  ${mobileOnly(css`
    ${font({ size: '13px', color: contents000 })};

    height: 36px;
    padding: 11px 10px;
  `)};
`;

OptionItem.Text = styled.div`
  ${textEllipsis};
  width: 95%;
`;

export const Message = styled.div`
  ${font({ size: '13px', color: accent100 })};

  min-height: 19px;
  margin-top: 4px;
`;
