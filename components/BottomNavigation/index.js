import { NavigationBar, AddButton, AddIcon} from "./BottomNav.styles";
import ModalWindow from "../Modal/Modal";
import ProductForm from "../ProductForm/ProductForm";
import {useState} from "react";

export default function BottomNavigation({ onAddProduct}) {

    const[isAddOpen, setAddOpen] = useState(false);
    
    return (
        <>
        <NavigationBar>
            <AddButton onClick={() => setAddOpen(true)}>
              <AddIcon src="/assets/icon_add.svg" alt="add-product"/>
            </AddButton>
        </NavigationBar>
        <ModalWindow isOpen={isAddOpen} onClose={() => setAddOpen(false)}>
            <ProductForm onAddProduct = {onAddProduct}/>
        </ModalWindow>
        </>
    )
}