import { ProductLink, StyledSpan, ProductContainer } from "./Product.styles";

export default function Product({
  id,
  name,
  quantity,
  measureUnit,
  onChange,
  completed,
  category,
}) {
  return (
    <ProductContainer>
      {" "}
      <input type="checkbox" onChange={onChange} checked={completed} />
      <ProductLink
        $isCompleted={completed}
        href={`/products/${category}/${id}`}
        key={id}
      >
        <StyledSpan $isCompleted={completed}>
          {" "}
          {name} <span>&times;</span> {quantity} {measureUnit}
        </StyledSpan>
      </ProductLink>
    </ProductContainer>
  );
}
