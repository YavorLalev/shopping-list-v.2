import { useRouter } from "next/router";
import Product from "@/components/Product/Product";
import styled from "styled-components";

export const ProductListContainer = styled.ul `
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
gap: 1.6rem;
align-items: center;
`
export default function ProductList({products, onChange}) {
  const router = useRouter();
  const { category } = router.query; 

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  
  return (
    <>
    <h2>Products in {category} list</h2>
      <ProductListContainer>
        {filteredProducts
        .map(({id, name, quantity,measureUnit, isCompleted}) => (
          <Product
          key={id}
          id={id}
          name={name}
          quantity={quantity}
          measureUnit={measureUnit}
          completed={isCompleted}
          onChange={() =>onChange(id)}

        />
          ))}
      </ProductListContainer>
    </>
  );
}