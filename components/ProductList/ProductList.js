import Product from "@/components/Product/Product";
import {
  ProductListContainer,
  ProductListHeadline,
  Container,
  BackButtonContainer,
} from "./ProductList.styles";
import DeleteButton from "../DeleteButton/DeleteButton";
import BackButton from "../BackButton/BackButton";

export default function ProductList({
  products,
  onChange,
  setIsConfirmed,
  category,
}) {
  // Filter products by category
  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().replaceAll(" ", "-") === category
  );

  // Check if any product is marked as completed
  const selectedProducts = filteredProducts.filter(
    (product) => product.isCompleted
  );

  // Format the text in product list headline
  function formatCategory(category) {
    return category
      .replaceAll("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <Container>
        <ProductListHeadline>
          {filteredProducts.length === 0
            ? "No Products"
            : `Products in ${formatCategory(category)} list`}
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
      </Container>
      {selectedProducts.length > 0 && (
        <DeleteButton onClick={() => setIsConfirmed(true)} />
      )}
    </>
  );
}
