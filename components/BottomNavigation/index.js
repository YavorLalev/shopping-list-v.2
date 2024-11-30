import { NavigationBar, AddButton, AddIcon} from "./BottomNav.styles";
export default function BottomNavigation() {

    return (
        <>
        <NavigationBar>
            <AddButton>
              <AddIcon src="/assets/icon_add.svg" alt="add-product"/>
            </AddButton>
        </NavigationBar>
        </>
    )
}