import { ProductLink } from "./Product.styles";

export default function Product({id, name, quantity,measureUnit, onChange, completed}) {

return (
    <>
          <input type = "checkbox" onChange={onChange} checked={completed}/>
          <ProductLink href={`/products/${id}`} key={id}>
            <span> {name} </span><span>&times;</span> {quantity} {measureUnit}
          </ProductLink>
        
  </>
);
}
