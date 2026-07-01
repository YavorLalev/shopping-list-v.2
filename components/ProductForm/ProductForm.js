import {
  FormContainer,
  Label,
  Input,
  Select,
  Fieldset,
} from "./ProductForm.styles";
import { measureUnits } from "@/resources/listOfMeasureUnits";
import { useState } from "react";
import Button from "../Button/Button";
import AlertModal from "../AlertModal/AlertModal";

export default function ProductForm({
  onAddProduct,
  onEditProduct,
  initialValues = 0,
}) {
  const [formValues, setFormValues] = useState(
    initialValues || {
      name: "",
      quantity: "",
      measureUnit: "",
      category: "",
    }
  );
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [error, setError] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    //Helper function to handle the error message
    function showError(message) {
      setError(message);
      setIsEditOpen(true);
    }

    const cleanedValues = {
      ...formValues,
      name: formValues.name.trim(),
      quantity: Number(formValues.quantity),
      category: formValues.category.trim().toLowerCase(),
    };

    if (cleanedValues.quantity <= 0 || cleanedValues.name.length < 2) {
      showError(
        "Product name must contain at least two letters and quantity should be a positive number."
      );
      return;
    }

    if (initialValues && onEditProduct) {
      onEditProduct({ ...cleanedValues, id: initialValues.id });
    } else {
      onAddProduct(cleanedValues);

      setFormValues({
        name: "",
        quantity: "",
        measureUnit: "",
        category: "",
      });
    }
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Name:
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
          <Label htmlFor="quantity">
            Quantity:
            <Input
              type="number"
              id="quantity"
              name="quantity"
              value={formValues.quantity}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label htmlFor="measure-unit">
            Choose units
            <Select
              id="measure-unit"
              name="measureUnit"
              value={formValues.measureUnit}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              {measureUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </Select>
          </Label>
        </Fieldset>
        <Label htmlFor="category">
          Category:
          <Input
            type="text"
            id="category"
            value={formValues.category}
            onChange={handleInputChange}
            name="category"
            required
          />
        </Label>
        <Button $primary type="submit">
          {initialValues ? "Save Changes" : "Add Product"}
        </Button>
      </FormContainer>

      <AlertModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setError("");
        }}
        alertTitle="Validation Error"
      >
        {error}
      </AlertModal>
    </>
  );
}
