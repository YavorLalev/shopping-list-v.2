import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalHeader,
  CloseButton,
} from "./Modal.styles";
import { useState, useEffect } from "react";

export default function ModalWindow({ children, isOpen, onClose, modalTitle }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    isVisible && (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>{modalTitle}</ModalTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ModalOverlay>
    )
  );
}
