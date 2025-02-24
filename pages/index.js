import ProductList from "@/components/ProductList/ProductList";
import BottomNavigation from "@/components/BottomNavigation";
import CategoryList from "@/components/CategoryList/CategoryList";

export default function HomePage( {onAddProduct, products}
) {

  return (
    <>
    <CategoryList products = {products}/>
    <ProductList products = {products}/>
    <BottomNavigation  onAddProduct={onAddProduct}/>
    </>
  );
}
