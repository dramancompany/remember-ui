import React from 'react';

import { helpIcon, plusIcon } from 'common/components/Icons/Icons';

import { Icon, Tooltip } from './BaseTooltip.styles';
import 'tippy.js/dist/tippy.css';

const getImgFromType = (type) => {
  switch (type) {
    case 'plus':
      return plusIcon;
    case 'help':
    default:
      return helpIcon;
  }
};

/**
 * @name DcTooltip
 * @param { 'help' | 'plus' } type
 * @param { 'small' | 'medium' } size
 * @param { 'dclight', 'dcdark', 'dcblue' } theme
 */
export const DcTooltip = ({
  customComponent,
  offset = '0,0',
  arrow = true,
  onClick = () => {},
  content,
  iconStyle,
  size = 'small',
  type = 'help',
  theme = 'dclight',
  placement = 'bottom',
  textAlign = 'center',
}) => (
  <Tooltip
    offset={offset}
    placement={placement}
    arrow={arrow}
    textAlign={textAlign}
    size={size}
    popperOptions={{
      modifiers: {
        preventOverflow: {
          boundariesElement: 'window',
        },
      },
    }}
    content={content}
    theme={theme}
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
