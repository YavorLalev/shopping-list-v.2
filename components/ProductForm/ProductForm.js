import { FormContainer,Label, Input, Select, Fieldset, FormButton} from "./ProductForm.styles";
import { measureUnits } from "@/resources/listOfMeasureUnits";
import { useState } from "react";
import Button from "../Button/Button";

export default function ProductForm({onAddProduct}) {

    const [formValues, setFormValues] = useState({
        name: "",
        quantity:"",
        measureUnit: "",
        category:"",
    })
    
    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormValues(
           { ...formValues,
            [name]: value
           }
        ) 
    }

    function handleSubmit(event){
        event.preventDefault();
        onAddProduct(formValues);
        setFormValues({
            name: "",
            quantity:"",
            measureUnit: "",
            category:""})
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor="name">Name: 
                <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formValues.name}
                onChange={handleInputChange}
                required
                />
            </Label> 
            <Fieldset>
            <Label htmlFor="quantity">Quantity:
                <Input 
                type="number" 
                id="quantity" 
                name="quantity"
                value={formValues.quantity}
                onChange={handleInputChange} 
                required
                />
            </Label>
            <Label htmlFor="measure-unit">Choose units
                <Select 
                id="measure-unit" 
                name="measureUnit"
                value={formValues.measureUnit}
                onChange={handleInputChange}
                >
                <option value="">Select</option>
                {measureUnits.map((unit) => (
                    <option key={unit} value={unit}>{unit}</option>
                ))}
                </Select>
            </Label>
            </Fieldset>
            <Label htmlFor="category">Category: 
                <Input 
                type="text" 
                id="category" 
                value={formValues.category}
                onChange={handleInputChange}
                name="category"
                required
                />
                </Label>
            <Button $primary type="submit">Add Product</Button>
        </FormContainer>
    );
}