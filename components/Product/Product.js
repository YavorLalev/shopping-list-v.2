import { ProductLink } from "./Product.styles";

export default function Product({id, name, quantity,measureUnit}) {

return (
    <>
          <ProductLink href={`/products/${id}`} key={id}>
            {name} <span>&times;</span> {quantity} {measureUnit}
          </ProductLink>
        
  </>
);
}
