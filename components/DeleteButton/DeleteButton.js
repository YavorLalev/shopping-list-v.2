import { Button, DeleteIcon } from "./DeleteButton.style";
import Image from "next/image"

export default function DeleteButton ({deleteProduct}) {
return (
<>
<Button  type = "button" onClick = {deleteProduct}>
<DeleteIcon width={40} height={40} src="/assets/Bin bounce.svg" alt="remove-product"/>
</Button>
</>
);
}