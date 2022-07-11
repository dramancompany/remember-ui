import React from 'react';
import type { Instance, Props as TippyProps } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import { Tooltip } from './InfoTooltip.styles';

interface Props {
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
}: Props) => {
  /**
   * @description
   * @tippy.js/react 라이브러리의 작동 원리상
   * visible prop을 넘길 경우 trigger가 동작하지 않는다.
   * 별도로 children wrapper에 event를 감지하는 동작을 넣어주어야 한다.
   */
  return (
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
      placement="bottom" // TODO: bottom-center에서 bottom으로 변경함 (체크 필요)
      $customAnimation={customAnimation}
      onShow={onShow}
    >
      <div onClick={onClick}>{children}</div>
    </Tooltip>
  );
};
