import { ModalContainer, ModalContent, ModalTitle, ModalHeader, CloseButton } from "./Modal.styles";
import { useState, useEffect } from "react";


export default function ModalWindow({children, isOpen,onClose}) {

    const[isVisible, setIsVisible] = useState(false);

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
        <ModalContainer>
            <ModalHeader>
                <ModalTitle>Add a product</ModalTitle>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
        </ModalContainer>)
        
    )
    
}