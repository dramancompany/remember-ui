import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { MoreButton } from '../../Button';
import { requiredIcon } from '../../../assets';

import {
  Container,
  Label,
  Content,
  Selected,
  Options,
  OptionItem,
  Message,
} from './Select.styles';

export const Select = ({
  options = [],
  value = '',
  className,
  onChange,
  label,
  changeInputMode,
  required,
  isFixedSelect,
  maxHeight,
  placeholder = '포지션을 선택하세요',
  marginBottom,
  errorMessage,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openExample = () => {
    setIsOpen(true);
  };

  const closeExample = () => {
    setIsOpen(false);
  };

  const selectHandler = () => {
    if (isFixedSelect) return false;
    return isOpen ? closeExample() : openExample();
  };

  const selectedOption = options.find((option) => option.id === value);

  return (
    <Container className={className}>
      {label && (
        <Label marginBottom={marginBottom}>
          <Label.Text>{label}</Label.Text>
          {required && <Label.Mark src={requiredIcon} alt="mark" />}
        </Label>
      )}
      <Content isFixed={isFixedSelect} active={isOpen} error={error}>
        <OutsideClickHandler onOutsideClick={closeExample}>
          <Selected onClick={selectHandler}>
            {selectedOption ? (
              <Selected.Text>{selectedOption.label}</Selected.Text>
            ) : (
              <Selected.Unselected>{placeholder}</Selected.Unselected>
            )}
            {!isFixedSelect && <MoreButton value={isOpen} />}
          </Selected>
          {options.length > 0 && isOpen && (
            <Options active={isOpen} maxHeight={maxHeight}>
              {options.map(({ id, label, disabled }, index) => {
                return (
                  <OptionItem
                    key={`option-${index}`}
                    custom={id === 'custom'}
                    selected={value === id}
                    disable={disabled}
                    onClick={() => {
                      if (!disabled) {
                        id !== 'custom' ? onChange(id) : changeInputMode();
                      }
                      closeExample();
                    }}
                  >
                    <OptionItem.Text>{label}</OptionItem.Text>
                  </OptionItem>
                );
              })}
            </Options>
          )}
        </OutsideClickHandler>
      </Content>
      {errorMessage && <Message>{errorMessage}</Message>}
    </Container>
  );
};
