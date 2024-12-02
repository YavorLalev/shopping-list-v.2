import { FormContainer,Label } from "./ProductForm.styles";

export default function ProductForm() {

    return(
        <>
        <FormContainer>
                <Label htmlFor="name">Name:<input type="text" id="name" name="name"/></Label>
                <Label htmlFor="quantity">Quantity:<input type="number" id="quantity" name="quantity"/></Label>
                <Label htmlFor="category">Category:<input type="text" id="category" name="category" value=""/> </Label>
                <button type="submit">Add Product</button>
        </FormContainer>
        </>
    );
}