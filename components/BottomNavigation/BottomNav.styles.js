import styled from "styled-components"

export const NavigationBar = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
width: 100%;
bottom: 0;
left: 0;
height: 60px;
background: var(--secondary-color);
box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.15);
`
export const AddButton = styled.button`
appearance: none;
border: none;
background: inherit;
`
export const AddIcon = styled.img`
width: 100%;
height: 100%;
cursor:pointer;
`