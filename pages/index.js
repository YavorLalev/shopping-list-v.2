import ProductList from "@/components/ProductList/ProductList";
import BottomNavigation from "@/components/BottomNavigation";

export default function HomePage( {onAddProduct, products}
) {

  return (
    <>
    <ProductList products = {products}/>
    <BottomNavigation  onAddProduct={onAddProduct}/>
    </>
  );
}
