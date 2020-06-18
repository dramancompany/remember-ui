import React from 'react';
import 'tippy.js/dist/tippy.css';

import { Tooltip } from './InfoTooltip.styles';

export const InfoTooltip = ({
  children,
  content,
  className,
  onClick,
  visible,
}) => {
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
      placement="bottom-center"
    >
      <div onClick={onClick}>{children}</div>
    </Tooltip>
  );
};
