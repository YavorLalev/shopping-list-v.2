import { FormContainer,Label, Input, Select, Fieldset, FormButton} from "./ProductForm.styles";
import { measureUnits } from "@/resources/listOfMeasureUnits";

export default function ProductForm() {

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target);
        const productData = Object.fromEntries(formData);
    }
    return(
        <>
        <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="name">Name: 
                <Input type="text" id="name" name="name" required/>
                </Label> 
            <Fieldset>
            <Label htmlFor="quantity">Quantity:
                <Input type="number" id="quantity" name="quantity" required/>
            </Label>
            <Label htmlFor="measure-unit">Choose units
                <Select id="measure-unit" name="measure-unit">
                <option value="">Select</option>
                {measureUnits.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
                </Select>
            </Label>
            </Fieldset>
        
            <Label htmlFor="category">Category: <Input type="text" id="category" name="category" required /></Label>
            <FormButton type="submit">Add Product</FormButton>
        </FormContainer>
        </>
    );
}