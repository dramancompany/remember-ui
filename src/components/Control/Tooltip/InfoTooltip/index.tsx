import React from 'react';
import type { Instance, Props as TippyProps } from 'tippy.js';

import { Tooltip } from './InfoTooltip.styles';

export interface InfoTooltipProps {
  children?: React.ReactNode;
  content: React.ReactNode;
  visible?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onShow?: (instance: Instance<TippyProps>) => false | void;
  customAnimation?: 'headShake';
}

export const InfoTooltip = ({
  children,
  content,
  className,
  onClick,
  onShow = () => {},
  visible,
  customAnimation,
}: InfoTooltipProps) => (
  /**
   * @description
   * @tippy.js/react 라이브러리의 작동 원리상
   * visible prop을 넘길 경우 trigger가 동작하지 않는다.
   * 별도로 children wrapper에 event를 감지하는 동작을 넣어주어야 한다.
   */
  <Tooltip
    className={className}
    content={<div onClick={onClick}>{content}</div>}
    visible={visible}
    interactive
    arrow
    hideOnClick={false}
    duration={0}
    zIndex={200}
    theme="dcblue"
    placement="bottom"
    $customAnimation={customAnimation}
    onShow={onShow}
  >
    <div onClick={onClick}>{children}</div>
  </Tooltip>
);
