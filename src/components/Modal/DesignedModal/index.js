import React from 'react';

import {
  Container,
  Modal,
  Block,
  Title,
  SubTitle,
  Buttons,
  Button,
} from './DesignedModal.styles';

export const DesignedModal = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  customText,
  submit,
  close,
  submitText,
  closeText = '닫기',
  submitButtonDisabled = false,
  headerButton,
  isLoading = false,
  onAfterOpen = () => {},
}) => {
  return (
    <Container isOpen={isOpen} onClose={onClose} onAfterOpen={onAfterOpen}>
      <Modal>
        <Modal.Header>
          <Modal.Header.Content>
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </Modal.Header.Content>
          <Modal.Header.Content>{headerButton}</Modal.Header.Content>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {customText}
          <Block />
          <Buttons>
            {close && (
              <Button
                color="gray"
                size="large"
                fill
                rounded
                onClick={close}
                disabled={isLoading}
              >
                {closeText}
              </Button>
            )}
            {submit && (
              <Button
                color="yellow"
                size="large"
                fill
                rounded
                onClick={submit}
                disabled={submitButtonDisabled}
                isLoading={isLoading}
              >
                {submitText}
              </Button>
            )}
          </Buttons>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
