import {
  AlertOverlay,
  AlertContainer,
  AlertContent,
  AlertTitle,
  AlertMessage,
  CloseButton,
} from "./AlertModal.styles";
import { useState, useEffect } from "react";

export default function AlertModal({
  children,
  isOpen,
  onClose,
  alertTitle,
  alertType,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    isVisible && (
      <AlertOverlay>
        <AlertContainer $alertType={alertType}>
          <AlertContent>
            <AlertTitle>{alertTitle}</AlertTitle>
            <AlertMessage>{children}</AlertMessage>
          </AlertContent>

          <CloseButton onClick={onClose}>✕</CloseButton>
        </AlertContainer>
      </AlertOverlay>
    )
  );
}
