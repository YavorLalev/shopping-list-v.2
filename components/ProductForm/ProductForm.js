import { FormContainer,Label, Input} from "./ProductForm.styles";
import { measureUnits } from "@/resources/listOfMeasureUnits";

export default function ProductForm() {

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target);
        const productData = Object.fromEntries(formData);
        console.log(productData)
    }
    return(
        <>
        <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="name">Name: <Input type="text" id="name" name="name"/></Label> 
            <Label htmlFor="quantity">Quantity:<Input type="number" id="quantity" name="quantity"/></Label>
            <Label htmlFor="measure-unit">Choose units
                <select id="measure-unit" name="measure-unit">
                <option value="">Select</option>
                {measureUnits.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
                </select></Label>
            
            <Label htmlFor="category">Category: <Input type="text" id="category" name="category" /></Label>
            <button type="submit">Add Product</button>
               
        </FormContainer>
        </>
    );
}