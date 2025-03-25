import { useRouter } from "next/router";
import ModalWindow from "@/components/Modal/Modal";
import { FormButton } from "@/components/ProductForm/ProductForm.styles";
import ProductList from "@/components/ProductList/ProductList";
import styled from "styled-components";

const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
margin: 30px;
gap:2rem;
`
export default function CategoryDetails({products,onDeleteProduct,onChange, setIsConfirmed, isConfirmed}) {
  const router = useRouter();
  const { category } = router.query; 

  return (
    <>
      <ProductList
      products={products} 
      onChange={onChange}
      category={category}
      setIsConfirmed={setIsConfirmed}
      />
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
