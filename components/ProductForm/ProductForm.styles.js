import styled from "styled-components";

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
font: var(--font-label);
margin-bottom: 24px;
`
export const Input = styled.input`
    background-color: var(--input-color);
    padding: 0.5rem 1rem;
    margin-top: 6px;
    box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 4px;
  `;

export const Select = styled.select`
 background-color: var(--input-color);
    padding: 0.2rem;
    margin-top: 6px;
    box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 4px;
`
export const Fieldset = styled.fieldset`
border: none;
`
export const FormButton = styled.button`
background: var(--secondary-color);
color: var(--primary-color);
font: var(--font-button);
padding: 10px;
border-radius: 10px;
border:none;
cursor: pointer;
`
  