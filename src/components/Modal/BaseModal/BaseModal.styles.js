import styled from 'styled-components';

export const Container = styled.div`
  cursor: ${({ isDraggable }) => (isDraggable ? 'move' : 'default')};
`;
