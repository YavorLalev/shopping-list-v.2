import styled from "styled-components"

export const Container = styled.div`

height: 100vh;
display: flex; 
justify-content: center;
align-items: center; 
`
export  const Card = styled.div`
display: flex;
width: 400px;
height:400px;
align-items: center;
flex-direction: column;
background-color: var(--input-color);
box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
border: 1px solid var(--border-color);
border-radius: 10px;
padding: 1rem;

`
export const TitleSection = styled.section`
margin-top: 40px;
`
export const ProductDataSection = styled.section`
margin-top: 40px;
display: flex;
gap: 1rem;
flex-direction: column;
`
export const ProductTitle = styled.h3`
font: var(--font-heading);
color: var(--secondary-color);
`

export const ProductData = styled.p`
font: var(--font-product);
`