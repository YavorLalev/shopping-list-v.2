import { GridContainer, CategoryLink } from "./CategoryList.styles";

export default function CategoryList({products}) {
    
return (
    <>
     <>
      <GridContainer>
        {products
          .map(({ category}) => category) // Extract categories
          .filter((category, index, self) => self.indexOf(category) === index) // Remove duplicates
          .map((category, index) => (
            <CategoryLink href = {`/products/${category}`} key={index}>{category}</CategoryLink> // Render each unique category
          ))}
      </GridContainer>
    </>
      
  </>
);
}