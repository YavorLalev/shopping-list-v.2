import { NavigationBar, AddButton, AddIcon } from "./BottomNav.styles";
import ModalWindow from "../Modal/Modal";
import ProductForm from "../ProductForm/ProductForm";
import { useState } from "react";

export default function BottomNavigation({
  onAddProduct,
  setAlert,
  showAlert,
  setIsModalOpen,
  isModalOpen,
  alert,
}) {
  const [isAddOpen, setAddOpen] = useState(false);

  return (
    <>
      <NavigationBar>
        <AddButton onClick={() => setAddOpen(true)}>
          <AddIcon src="/assets/icon_add.svg" alt="add-product" />
        </AddButton>
      </NavigationBar>
      <ModalWindow
        modalTitle="Add a product"
        isOpen={isAddOpen}
        onClose={() => setAddOpen(false)}
      >
        <ProductForm
          onAddProduct={onAddProduct}
          setAlert={setAlert}
          showAlert={showAlert}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          alert={alert}
        />
      </ModalWindow>
    </>
  );
}
