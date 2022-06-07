import styled from 'styled-components';

export const Container = styled.div<{ isDraggable?: boolean }>`
  cursor: ${({ isDraggable }) => (isDraggable ? 'move' : 'default')};
`;
