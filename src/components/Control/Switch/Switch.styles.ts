import styled from 'styled-components';

import { gray100, white } from '../../../core/GlobalStyle';

import { SwitchSize } from './index';

export const Container = styled.div`
  display: inline-flex;
`;

export const Span = styled.span<{ size?: SwitchSize }>`
  content: '';
  position: absolute;
  top: ${({ size }) => (size === 'small' ? 3 : 4)}px;
  left: ${({ size }) => (size === 'small' ? 3 : 4)}px;
  width: ${({ size }) => (size === 'small' ? 14 : 28)}px;
  height: ${({ size }) => (size === 'small' ? 14 : 28)}px;
  border-radius: 50%;
  transition: 0.2s;
  background: ${white};
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label<{
  color: string;
  size?: SwitchSize;
  checked?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: ${({ size }) => (size === 'small' ? 36 : 64)}px;
  height: ${({ size }) => (size === 'small' ? 20 : 36)}px;
  background: ${({ checked, color }) => (checked ? color : gray100)};
  border-radius: ${({ size }) => (size === 'small' ? 10 : 20)}px;
  position: relative;
  transition: background-color 0.2s;

  &:active ${Span} {
    width: 18px;
  }
`;

export const Input = styled.input<{ $size?: SwitchSize }>`
  height: 0;
  width: 0;
  display: none;

  &:checked + ${Label} ${Span} {
    left: calc(100% - ${({ $size }) => ($size === 'small' ? 3 : 4)}px);
    transform: translateX(-100%);
  }
`;
