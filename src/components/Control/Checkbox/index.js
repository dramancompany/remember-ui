import React from 'react';

import {
  checkboxChecked,
  checkboxOutline,
  checkboxDisabled,
  checkboxHovered,
} from '../../../assets';

import { Container, Icon } from './Checkbox.styles';

const getIconImg = (state, disabled = false) => {
  if (disabled) return checkboxDisabled;
  if (state === 'hover') return checkboxHovered;
  if (state === 'on') return checkboxChecked;
  return checkboxOutline;
};

export const Checkbox = ({
  state = 'off',
  onClick = () => {},
  disabled,
  className,
}) => {
  return (
    <Container
      className={className}
      disabled={disabled}
      onClick={(e) => !disabled && onClick(e)}
    >
      <Icon src={getIconImg(state, disabled)} alt="checkbox-img" />
    </Container>
  );
};
