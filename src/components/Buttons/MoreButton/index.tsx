import React from 'react';

import {
  expandMoreSmallIcon,
  expandLessSmallIcon,
  expandLessLargeIcon,
  expandMoreLargeIcon,
} from '../../../assets';

import { Icon } from './MoreButton.styles';

export interface MoreButtonProps {
  className?: string;
  value?: boolean;
  size?: 'small' | 'large';
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
 */
export const MoreButton = ({
  value = false,
  size = 'small',
  onClick,
  className,
}: MoreButtonProps) => {
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
