import React from 'react';

import { helpIcon, plusIcon, moreIcon } from '../../../assets';
import { Icon, Tooltip } from './BaseTooltip.styles';
import 'tippy.js/dist/tippy.css';

const getImgFromType = (type) => {
  switch (type) {
    case 'plus':
      return plusIcon;
    case 'more':
      return moreIcon;
    case 'help':
    default:
      return helpIcon;
  }
};

/**
 * @name Tooltip
 * @param { 'help' | 'plus' | 'more' } type
 * @param { 'small' | 'medium' } size
 * @param { 'dclight', 'dcdark', 'dcblue' } theme
 */
export const BaseTooltip = ({
  customComponent,
  offset = '0,0',
  arrow = true,
  onClick = () => {},
  onShow = () => {},
  content,
  iconStyle,
  size = 'small',
  type = 'help',
  theme = 'dclight',
  placement = 'bottom',
  textAlign = 'center',
  className,
}) => (
  <Tooltip
    className={className}
    offset={offset}
    placement={placement}
    arrow={arrow}
    _textAlign={textAlign}
    _size={size}
    popperOptions={{
      modifiers: {
        preventOverflow: {
          boundariesElement: 'window',
        },
      },
    }}
    content={content}
    theme={theme}
    onShow={onShow}
  >
    {customComponent || (
      <Icon
        alt="icon"
        src={getImgFromType(type)}
        onClick={onClick}
        style={iconStyle}
      />
    )}
  </Tooltip>
);
