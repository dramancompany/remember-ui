import React from 'react';

import {
  expandMoreSmallIcon,
  expandLessSmallIcon,
  expandLessLargeIcon,
  expandMoreLargeIcon,
} from '../../../assets';

import { Icon } from './MoreButton.styles';

export const MoreButton = ({
  value = false,
  size = 'small',
  onClick = () => {},
}) => {
  const lessIcon = size === 'small' ? expandLessSmallIcon : expandLessLargeIcon;
  const moreIcon = size === 'small' ? expandMoreSmallIcon : expandMoreLargeIcon;
  return (
    <Icon size={size} onClick={onClick} src={value ? lessIcon : moreIcon} />
  );
};
