import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { MoreButton } from '../../Button';
import { requiredIcon } from '../../../assets';

import {
  Container,
  Label,
  LabelText,
  LabelMark,
  Content,
  Selected,
  SelectedText,
  SelectedUnselected,
  Options,
  OptionItemText,
  OptionItem,
  Message,
} from './Select.styles';

type ValueType = string | number;

export interface SelectOption<T extends ValueType, P = any> {
  id: T;
  label: string;
  value?: P;
  disabled?: boolean;
}

export interface SelectProps<T extends ValueType> {
  options: SelectOption<T>[];
  value?: T;
  onChange: (id: T) => void;
  className?: string;
  label?: string;
  changeInputMode?: () => void;
  required?: boolean;
  isFixedSelect?: boolean;
  maxHeight?: number;
  placeholder?: string;
  marginBottom?: number;
  error?: boolean;
  errorMessage?: string;
}

export const Select = <T extends ValueType>({
  options = [],
  value,
  className,
  onChange,
  label,
  changeInputMode,
  required,
  isFixedSelect,
  maxHeight,
  placeholder,
  marginBottom,
  errorMessage,
  error,
}: SelectProps<T>) => {
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
          <LabelText>{label}</LabelText>
          {required && <LabelMark src={requiredIcon} alt="mark" />}
        </Label>
      )}
      <Content isFixed={isFixedSelect} active={isOpen} error={error}>
        <OutsideClickHandler onOutsideClick={closeExample}>
          <Selected onClick={selectHandler}>
            {selectedOption ? (
              <SelectedText>{selectedOption.label}</SelectedText>
            ) : (
              <SelectedUnselected>{placeholder}</SelectedUnselected>
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
                        id !== 'custom' ? onChange(id) : changeInputMode?.();
                      }
                      closeExample();
                    }}
                  >
                    <OptionItemText>{label}</OptionItemText>
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
