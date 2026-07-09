import { useRouter } from "next/router";
import ModalWindow from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import ProductList from "@/components/ProductList/ProductList";
import styled from "styled-components";
import AlertModal from "@/components/AlertModal/AlertModal";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  gap: 2rem;
`;
export default function CategoryDetails({
  products,
  onDeleteProduct,
  onChange,
  setIsConfirmed,
  isConfirmed,
  setIsModalOpen,
  isModalOpen,
  alert,
}) {
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
          <Button type="button" onClick={() => setIsConfirmed(false)}>
            Cancel
          </Button>
          <Button $primary type="button" onClick={() => onDeleteProduct()}>
            Delete
          </Button>
        </ButtonWrapper>
      </ModalWindow>
      <AlertModal
        alertType={alert.type}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        alertTitle={alert.title}
      >
        {alert.message}
      </AlertModal>
    </>
  );
}
