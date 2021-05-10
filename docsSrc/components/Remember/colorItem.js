import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid rgba(16, 22, 26, 0.2);
  margin: 5px 0;
  padding: 5px 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => {
    if (props.invertTextColor) {
      return getInvertedTextColor(props.backgroundColor);
    }
    return props.color || '#fff';
  }};
  transition: all 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  &::after {
    content: "${(props) => props.content}";
  }
  &:hover {
    border: 1px solid rgba(16, 22, 26, 0.2);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);
    &::after {
      content: "Click to copy hex code";
    }
  }
`;

const getInvertedTextColor = (hexcode) => {
  const normalized =
    hexcode.length === 3
      ? hexcode
          .slice(1)
          .split('')
          .map((c) => `${c}${c}`)
      : [hexcode.slice(1, 3), hexcode.slice(3, 5), hexcode.slice(5)];
  const avg =
    normalized
      .map((hex) => parseInt(hex, 16))
      .reduce((acc, curr) => acc + curr, 0) / 3;
  return avg > 127 ? '#000' : '#fff';
};

const HexCode = styled.span`
  float: right;
`;

const handleClickItem = (backgroundColor) => {
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
  color,
  invertTextColor,
  ...rest
}) => (
  <Container
    color={color}
    backgroundColor={backgroundColor}
    content={colorName}
    onClick={() => handleClickItem(backgroundColor)}
    invertTextColor={invertTextColor}
    {...rest}
  >
    <HexCode>{backgroundColor.toUpperCase()}</HexCode>
  </Container>
);
