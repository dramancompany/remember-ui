import styled from 'styled-components';
import { gray100, yellow100 } from '../../../core/GlobalStyle';

export const Container = styled.div`
  display: inline-flex;
`;

export const Span = styled.span`
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transition: 0.2s;
  background: #fff;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 36px;
  height: 20px;
  background: ${({ checked }) => (checked ? yellow100 : gray100)};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s;

  &:active ${Span} {
    width: 60px;
  }
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  display: none;

  &:checked + ${Label} ${Span} {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;
