import styled from "styled-components";

export const ModalContainer = styled.div`
width: 100%;
background: var(--primary-color);
position:relative;
 `
export const ModalContent = styled.div`
width: 100%;
`
export const ModalHeader = styled.div`
display: flex;
justify-content: space-evenly;
padding: 10px;
`
export const ModalTitle = styled.h2`
color: var(--secondary-color);
font: var(--font-heading);
`

export const CloseButton = styled.button`
border: none;
background: none;
font: var(--font-heading);
cursor:pointer;
`
