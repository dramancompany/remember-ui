import React, { useState } from 'react';
import { createUUID } from '../../../utils/common';

import { Container, Menu, Item } from './Accordian.styles';

const ItemHeight = 48;

export const Accordian = ({
  menus = [],
  onClickItem = () => {},
  onCheckItem = () => {},
  isCheckedItem = () => {},
  hasCheckBox,
}) => {
  const [hasToggled, setHasToggled] = useState(false);
  const id = createUUID();

  return (
    <Container>
      <Menu>
        {menus &&
          menus.map(({ title, list }) => (
            <Item
              hasToggled={hasToggled}
              height={`${list.length * ItemHeight}px`}
            >
              <Item.Title for={title}>{title}</Item.Title>
              <Item.Checker
                onClick={() => setHasToggled(true)}
                name={id}
                id={title}
                height={`${list.length * ItemHeight}px`}
              />
              <Item.Inner className="inner">
                {list.map(({ title: listTitle, value, onClick }) => (
                  <Item.Inner.Title
                    onClick={() => {
                      if (hasCheckBox && onCheckItem) {
                        onCheckItem(title, value);
                      } else if (onClick) {
                        onClick(value);
                      } else {
                        onClickItem(value);
                      }
                    }}
                  >
                    {hasCheckBox && (
                      <Item.Inner.Checkbox
                        state={isCheckedItem(title, value) ? 'on' : 'off'}
                      />
                    )}
                    {listTitle}
                  </Item.Inner.Title>
                ))}
              </Item.Inner>
            </Item>
          ))}
      </Menu>
    </Container>
  );
};
