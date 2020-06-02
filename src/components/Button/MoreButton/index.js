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
  className,
}) => {
  const lessIcon = size === 'small' ? expandLessSmallIcon : expandLessLargeIcon;
  const moreIcon = size === 'small' ? expandMoreSmallIcon : expandMoreLargeIcon;
  return (
    <Icon
      className={className}
      size={size}
      onClick={onClick}
      src={value ? lessIcon : moreIcon}
    />
  );
};
