import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ $primary }) =>
    $primary ? "var(--secondary-color)" : "var(--primary-color)"};

  color: ${({ $primary }) =>
    $primary ? "var(--primary-color)" : "var(--secondary-color)"};
  font: var(--font-button);
  padding: 10px;
  border-radius: 10px;
  border: solid 2px var(--secondary-color);
  cursor: pointer;
`;

export default function Button({ children, $primary, onClick }) {
  return (
    <StyledButton $primary={$primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
