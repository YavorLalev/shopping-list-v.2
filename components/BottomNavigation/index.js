import { NavigationBar, AddButton, AddIcon} from "./BottomNav.styles";
import ModalWindow from "../Modal/Modal";
import {useState} from "react";

export default function BottomNavigation() {

    const[isAddOpen, setAddOpen] = useState(false);

    return (
        <>
        <NavigationBar>
            <AddButton onClick={() => setAddOpen(true)}>
              <AddIcon src="/assets/icon_add.svg" alt="add-product"/>
            </AddButton>
        </NavigationBar>
        <ModalWindow></ModalWindow>
        </>
    )
}