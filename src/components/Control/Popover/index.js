import React, { useState } from 'react';

import { Popover, Content } from './Popover.styles';

export const BasePopover = ({
  onPopoverOpenChange = () => {},
  className = 'DcPopover',
  customElement,
  content,
  size = 'small', // small or large
  children,
  onOpen = () => {},
  distance = 10,
  trigger = 'click',
  placement = 'bottom-end',
  disabled = false,
}) => {
  const [instance, setInstance] = useState(undefined);

  if (disabled) return <>{children}</>;

  return (
    <Popover
      className={className}
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      }}
      placement={placement}
      distance={distance}
      content={
        <div
          className={`${className}-popover-inner-wrapper`}
          onClick={e => {
            e.preventDefault();
            instance && instance.hide();
          }}
        >
          {customElement}
          <Content customElement={!!customElement}>{content}</Content>
        </div>
      }
      trigger={trigger}
      onTrigger={(inst, e) => {
        e.preventDefault();
      }}
      hideOnClick={!!trigger.includes('click')}
      onMount={inst => setInstance(inst)}
      arrow={false}
      size={size}
      onShow={() => {
        onPopoverOpenChange(true);
        onOpen();
      }}
      onUntrigger={(inst, e) => {
        /**
         * tippy.js bug로 추정
         * mouseclick 후에 전체 trigger가 작동하지 않는 현상이 존재하여,
         * 해당 케이스를 별도로 처리하는 mousemove에 대한 event trigger가 필요
         */
        if (e.type === 'mousemove') {
          instance.hide();
        }
      }}
      onHide={() => onPopoverOpenChange(false)}
      interactive
    >
      <div className={`${className}-popover-button`}>{children}</div>
    </Popover>
  );
};
