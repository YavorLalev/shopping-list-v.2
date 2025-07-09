import Product from "@/components/Product/Product";
import {
  ProductListContainer,
  ProductListHeadline,
  Container,
} from "./ProductList.styles";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function ProductList({
  products,
  onChange,
  setIsConfirmed,
  category,
}) {
  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // Check if any product is marked as completed
  const selectedProducts = filteredProducts.filter(
    (product) => product.isCompleted
  );

  return (
    <>
      <Container>
        <ProductListHeadline>
          {filteredProducts <= 0
            ? "No Products"
            : `Products in ${category} list`}
        </ProductListHeadline>
        <ProductListContainer>
          {filteredProducts.map(
            ({ id, name, quantity, measureUnit, isCompleted }) => (
              <Product
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                measureUnit={measureUnit}
                completed={isCompleted}
                onChange={() => onChange(id)}
                category={category}
              />
            )
          )}
        </ProductListContainer>
        {selectedProducts.length > 0 && (
          <DeleteButton deleteProduct={() => setIsConfirmed(true)} />
        )}
      </Container>
    </>
  );
}
