import { getTypographyStyles } from 'core';
import React from 'react';
import styled from 'styled-components';

type Props = {
  backgroundColor: string;
  invertTextColor?: boolean;
  colorName: string;
  deprecated?: boolean;
};

const ColorBox = styled.div<Props>`
  width: 200px;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin: 5px 0;
  padding: 5px 10px;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ invertTextColor, colorName, backgroundColor }) => {
    if (invertTextColor) {
      return getInvertedTextColor(backgroundColor);
    }
    return colorName || '#fff';
  }};
  transition: all 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);

  &:nth-child(1) {
    margin-right: 20px;
  }

  &:hover {
    border: 1px solid rgba(16, 22, 26, 0.2);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);
  }

  &::before {
    ${getTypographyStyles('Caption_B')}

    content: 'Deprecated';
    display: ${({ deprecated }) => (deprecated ? 'block' : 'none')};
    position: absolute;
    bottom: 35%;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 150px 2fr;
  gap: 10px;
`;

export const TitleWrap = styled.div`
  ${getTypographyStyles('Headline2_B')}
`;

export const ColorWrap = styled.div`
  display: flex;
  align-items: center;
`;

const getInvertedTextColor = (hexCode: string) => {
  const normalized =
    hexCode.length === 3
      ? hexCode
          .slice(1)
          .split('')
          .map((c) => `${c}${c}`)
      : [hexCode.slice(1, 3), hexCode.slice(3, 5), hexCode.slice(5)];
  const avg =
    normalized
      .map((hex) => parseInt(hex, 16))
      .reduce((acc, curr) => acc + curr, 0) / 3;
  return avg > 127 ? '#000' : '#fff';
};

const HexCode = styled.span`
  text-align: right;
`;

const ColorName = styled.span`
  ${getTypographyStyles('Headline4_B')}
`;

const handleClickItem = (backgroundColor: string) => {
  const element = document.createElement('textarea');
  element.value = backgroundColor.toUpperCase();
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
};

export const ColorItem = ({
  backgroundColor,
  colorName,
  invertTextColor = true,
  deprecated = false,
}: Props) => (
  <ColorBox
    colorName={colorName}
    backgroundColor={backgroundColor}
    onClick={() => handleClickItem(backgroundColor)}
    invertTextColor={invertTextColor}
    deprecated={deprecated}
  >
    <HexCode>{backgroundColor.toUpperCase()}</HexCode>
    <ColorName>{colorName}</ColorName>
  </ColorBox>
);
