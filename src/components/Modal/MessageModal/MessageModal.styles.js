import styled from 'styled-components';
import { contents00, font, primary02 } from '../../../core/GlobalStyle';
import { NewBaseButton } from '../../Button';

export const Content = styled.div`
  background-color: ${primary02};
  padding: 24px;
  border-radius: 8px;
  width: 311px;
`;

export const Message = styled.div`
  ${font({ size: '16px', color: contents00, weight: '500' })};

  line-height: 22px;
  margin-bottom: 24px;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CancelButton = styled(NewBaseButton)`
  margin-right: 8px;
`;
