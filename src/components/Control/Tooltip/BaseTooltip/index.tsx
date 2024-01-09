import React from 'react';
import type { ReactChild, CSSProperties, MouseEventHandler } from 'react';
import type { Placement, Instance, Props as TippyProps } from 'tippy.js';

import { helpIcon, plusIcon, moreIcon } from '../../../../assets';

import { Icon, Tooltip } from './BaseTooltip.styles';

const getImgFromType = (type: 'plus' | 'more' | 'help') => {
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

export interface BaseTooltipProps {
  customComponent?: JSX.Element;
  offset?: `${number},${number}`;
  arrow?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
  onShow?: (instance: Instance<TippyProps>) => false | void;
  content: ReactChild | ReactChild[];
  iconStyle?: CSSProperties;
  size?: 'small' | 'medium';
  type?: 'help' | 'plus' | 'more';
  theme?: 'dclight' | 'dcdark' | 'dcblue';
  placement?: Placement;
  textAlign?: CSSProperties['textAlign'];
  className?: string;
}

/**
 * @deprecated remember-ui는 더 이상 사용되지 않습니다. Rui를 사용해주세요.
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
}: BaseTooltipProps) => (
  <Tooltip
    className={className}
    offset={offset}
    placement={placement}
    arrow={arrow}
    $textAlign={textAlign}
    $size={size}
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
