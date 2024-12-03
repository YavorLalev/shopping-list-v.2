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
margin-top: 6px;
`

export const Select = styled.select`
margin-top: 6px;
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