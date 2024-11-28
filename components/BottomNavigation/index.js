import { NavigationBar, AddButton, AddIcon, ListButton } from "./BottomNav.styles";
import { useRouter } from "next/router";
export default function BottomNavigation() {
const router = useRouter();

function handleListNavigation() {
    router.push("/shoppinglist");
}
    return (
        <>
        <NavigationBar>
            <AddButton>
              <AddIcon src="/assets/icon_add.svg" alt="add-product"/>
            </AddButton>
            <ListButton onClick={handleListNavigation}><img src="/assets/icon_list.svg" alt="shopping-lists"/></ListButton>
        </NavigationBar>
        </>
    )
}