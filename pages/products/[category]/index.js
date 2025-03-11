import { useRouter } from "next/router";
import Product from "@/components/Product/Product";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import styled from "styled-components";

export const ProductListContainer = styled.ul `
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
gap: 1.2rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export default function ProductList({products, onChange, onDeleteProduct}) {
  const router = useRouter();
  const { category } = router.query; 

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return (
    <>
    <h3>Products in {category} list</h3>
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
      <DeleteButton deleteProduct = {() => onDeleteProduct()}/>
      
    </>
  );
}