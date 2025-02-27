import styled from "styled-components";
import Link from "next/link";

export const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: center;
height:100vh;
align-items: center;
padding: 90px 0px;
overflow-y: auto;
`;

export const CategoryLink = styled(Link)`
text-decoration: none;
color: inherit;
background-color: var(--input-color);
box-shadow: 0px 1px 4px -2px rgba(0, 0, 0, 0.1);
border: 1px solid var(--border-color);
border-radius: 10px;
padding: 1rem;
font: var(--font-product);
`

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoryText = styled.span`
  margin-top: 8px; 
  text-align: center;
`;