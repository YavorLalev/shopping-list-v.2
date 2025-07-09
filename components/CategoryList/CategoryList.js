import PlayAnimationOnHover from "@/utils/animation";
import {
  ListContainer,
  CategoryLink,
  CategoryItem,
  CategoryText,
} from "./CategoryList.styles";
import ShoppingIcon from "../../public/lotties/ShoppingIcon.json";

const style = {
  height: 160,
  width: 160,
};

const options = {
  animationData: ShoppingIcon,
  loop: true,
  autoplay: false,
};

export default function CategoryList({ products }) {
  // const uniqueCategories = products
  // .map(({ category}) => category) // Extract categories
  // .filter((category, index, self) => self.indexOf(category) === index) ; // Remove duplicates

  const uniqueCategories = [
    ...new Set(products.map(({ category }) => category)),
  ];

  return (
    <ListContainer>
      {uniqueCategories.map((category) => (
        <CategoryLink href={`/products/${category}`} key={category}>
          <CategoryItem>
            <PlayAnimationOnHover style={style} options={options} />
            <CategoryText>{category}</CategoryText>
          </CategoryItem>
        </CategoryLink>
      ))}
    </ListContainer>
  );
}
