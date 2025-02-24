import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
height:100vh;
align-items: center;
gap: 2rem;
`

export const ProductLink = styled(Link)`
text-decoration: none;
color: inherit;
background-color: var(--input-color);
box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
border: 1px solid var(--border-color);
border-radius: 10px;
padding: 1rem;
font: var(--font-product);
`