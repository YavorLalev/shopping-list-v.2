import { Button, DeleteIcon } from "./DeleteButton.style";

export default function DeleteButton ({deleteProduct}) {
return (
<>
<Button  type = "button" onClick = {deleteProduct}>
    <DeleteIcon width={32} height={32} src="/assets/Bin bounce.svg" alt="delete-product"/>
</Button>
</>
);
}