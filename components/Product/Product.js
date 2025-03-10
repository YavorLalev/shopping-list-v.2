import { ProductLink, StyledSpan,ProductContainer } from "./Product.styles";

export default function Product({id, name, quantity,measureUnit, onChange, completed}) {

return (
    <>
    <ProductContainer>  <input type = "checkbox" onChange={onChange} checked={completed}/>
          <ProductLink $isCompleted={completed} href={`/products/${id}`} key={id}>
            <StyledSpan $isCompleted={completed}> {name} <span>&times;</span> {quantity} {measureUnit}</StyledSpan>
          </ProductLink>
          </ProductContainer>
         
        
  </>
);
}
