import { useRouter } from "next/router";
import Product from "@/components/Product/Product";
import ModalWindow from "@/components/Modal/Modal";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import { FormButton } from "@/components/ProductForm/ProductForm.styles";
import styled from "styled-components";

const ProductListContainer = styled.ul `
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
const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
margin: 30px;
gap:2rem;
`
export default function ProductList({products, onChange, onDeleteProduct, setIsConfirmed, isConfirmed}) {
  const router = useRouter();
  const { category } = router.query; 

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // Check if any product is marked as completed
  const selectedProducts = filteredProducts.filter((product) => product.isCompleted);

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
      {selectedProducts.length > 0 && <DeleteButton deleteProduct = {() => setIsConfirmed(true)}/> }
      <ModalWindow 
        modalTitle="Are you sure?"
        isOpen={isConfirmed} 
        onClose={() => setIsConfirmed(false)}
      >
        <ButtonWrapper>
          <FormButton type = "button" onClick = {() => setIsConfirmed(false)}>Cancel</FormButton>
          <FormButton type = "button" onClick = {()=> onDeleteProduct()}>Delete</FormButton>
        </ButtonWrapper>
      </ModalWindow>
    </>

  );
}
