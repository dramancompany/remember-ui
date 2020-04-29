import React from 'react';

import {
  expandMoreSmall,
  expandLessSmall,
  expandLessLarge,
  expandMoreLarge,
} from '../../../assets';

import { Icon } from './MoreButton.styles';

export const MoreButton = ({
  value = false,
  size = 'small',
  onClick = () => {},
}) => {
  const lessIcon = size === 'small' ? expandLessSmall : expandLessLarge;
  const moreIcon = size === 'small' ? expandMoreSmall : expandMoreLarge;
  return (
    <Icon size={size} onClick={onClick} src={value ? lessIcon : moreIcon} />
  );
};
