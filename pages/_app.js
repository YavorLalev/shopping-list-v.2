import GlobalStyle from "../styles";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {

const [products, setProducts] = useLocalStorageState('products', {
  defaultValue: []});

const [isConfirmed, setIsConfirmed ] = useState(false);

  function handleAddProduct(newProduct) {
        setProducts([...products, {...newProduct, id: uid(), isCompleted: false}])

}

function handleCheckboxChange(productId) {
setProducts((prevProducts) => 
  prevProducts.map((product) => 
    product.id === productId ? {...product, isCompleted: !product.isCompleted } : product))
}

function handleDeleteProduct() {
  setProducts(products.filter((product) => !product.isCompleted))

  setIsConfirmed(false);
}
  return (
    <>
      <GlobalStyle />
      <Component 
    {...pageProps}
    onAddProduct = {handleAddProduct}
    onChange={handleCheckboxChange}
    onDeleteProduct={handleDeleteProduct}
    products = {products}
    setProducts = {setProducts}
    setIsConfirmed = {setIsConfirmed}
    isConfirmed = {isConfirmed}
      />
    </>
  );
}
