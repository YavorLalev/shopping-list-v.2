import { GridContainer, CategoryLink, CategoryItem, CategoryText } from "./CategoryList.styles";
import Image from "next/image";

export default function CategoryList({products}) {
    
return (
    <>
      <GridContainer>
        {products
          .map(({ category}) => category) // Extract categories
          .filter((category, index, self) => self.indexOf(category) === index) // Remove duplicates
          .map((category, index) => (
            <CategoryLink href = {`/products/${category}`} key={index}> 
           <CategoryItem>
                <Image src="/assets/Shopping cart.svg" width={140} height={140} alt="add-product" />
                <CategoryText>{category}</CategoryText>
              </CategoryItem></CategoryLink>
          ))}
      </GridContainer>
    </>
);
}