import React from 'react';

import {
  checkboxChecked,
  checkboxOutline,
  checkboxDisabled,
  checkboxHovered,
} from '../../../assets';
import useHover from '../../../hooks/useHover';
import { Container, Icon } from './Checkbox.styles';

export const Checkbox = ({
  state = 'off',
  onClick = () => {},
  disabled = false,
  className,
}) => {
  const [hoverRef, isHovered] = useHover();

  const getIconImg = () => {
    if (disabled) return checkboxDisabled;
    if (state === 'on') return checkboxChecked;
    if (isHovered) return checkboxHovered;
    return checkboxOutline;
  };

  return (
    <Container
      ref={hoverRef}
      className={className}
      disabled={disabled}
      onClick={(e) => !disabled && onClick(e)}
    >
      <Icon src={getIconImg()} alt="checkbox-img" />
    </Container>
  );
};
