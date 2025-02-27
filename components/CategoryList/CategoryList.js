import { ListContainer, CategoryLink, CategoryItem, CategoryText } from "./CategoryList.styles";
import Image from "next/image";

export default function CategoryList({products}) {

  // const uniqueCategories = products
  // .map(({ category}) => category) // Extract categories
  // .filter((category, index, self) => self.indexOf(category) === index) ; // Remove duplicates

  const uniqueCategories = [...new Set(products.map(({ category }) => category))];


return (
    
      <ListContainer>
        {uniqueCategories
          .map((category) => (
            <CategoryLink href = {`/products/${category}`} key={category}> 
           <CategoryItem>
                <Image src="/assets/Shopping cart.svg" width={140} height={140} alt="add-product" />
                <CategoryText>{category}</CategoryText>
              </CategoryItem></CategoryLink>
          ))}
      </ListContainer>
    
);
}