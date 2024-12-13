import { ModalContainer, ModalContent } from "./Modal.styles";

export default function ModalWindow({children}) {

    return (
        <>
        <ModalContainer>
            <ModalContent>{children}</ModalContent>
        </ModalContainer>
        </>
    )
    
}