import BottomNavigation from "@/components/BottomNavigation";
import CategoryList from "@/components/CategoryList/CategoryList";
import Lottie from "lottie-react";
import shoppingFever from "../public/lotties/Animation home_page.json";
import styled from "styled-components";

const style = {
  height: 300,
  width: 300,
};

const LottieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function HomePage({ onAddProduct, products }) {
  return (
    <>
      {products.length <= 0 ? (
        <LottieContainer>
          <Lottie animationData={shoppingFever} loop style={style} />
        </LottieContainer>
      ) : (
        <CategoryList products={products} />
      )}
      <BottomNavigation onAddProduct={onAddProduct} />
    </>
  );
}
