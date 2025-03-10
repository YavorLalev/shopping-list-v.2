import { ProductLink, StyledSpan } from "./Product.styles";

export default function Product({id, name, quantity,measureUnit, onChange, completed}) {

return (
    <>
          <input type = "checkbox" onChange={onChange} checked={completed}/>
          <ProductLink $isCompleted={completed} href={`/products/${id}`} key={id}>
            <StyledSpan $isCompleted={completed}> {name} <span>&times;</span> {quantity} {measureUnit}</StyledSpan>
          </ProductLink>
        
  </>
);
}
