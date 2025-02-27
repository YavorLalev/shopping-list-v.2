import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--overlay-color);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export const ModalContainer = styled.div`
width: 100%;
height: 92%;
border-radius: 20px 20px 0px 0px;
background: var(--primary-color);
position: relative;
overflow-y: auto;
 `
export const ModalContent = styled.div`
width: 100%;
`
export const ModalHeader = styled.div`
display: flex;
justify-content: space-evenly;
padding: 10px;
margin-top: 20px;
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
