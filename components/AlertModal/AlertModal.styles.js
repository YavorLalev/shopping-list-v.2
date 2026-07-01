import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const AlertOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--overlay-color);
  pointer-events: none;
  z-index: 1000;
`;

export const AlertContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);

  width: min(90%, 400px);
  padding: 16px 20px;

  background: var(--secondary-color);

  color: var(--input-color);

  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  pointer-events: auto;
  animation: ${slideDown} 0.3s ease;
`;

export const AlertContent = styled.div`
  flex: 1;
`;

export const AlertTitle = styled.h3`
  margin: 0;
  font: var(--font-heading);
`;

export const AlertMessage = styled.p`
  margin: 4px 0 0;
  font: var(--font-body);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
`;
