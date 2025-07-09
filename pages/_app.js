import GlobalStyle from "../styles";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: [],
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  // Add a new product
  function handleAddProduct(newProduct) {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: uid(), isCompleted: false },
    ]);
  }

  // Handle checkbox change (mark product as completed or not)
  function handleCheckboxChange(productId) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isCompleted: !product.isCompleted }
          : product
      )
    );
  }

  // Handle delete of completed products
  function handleDeleteProduct() {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => !product.isCompleted)
    );
    setIsConfirmed(false);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onAddProduct={handleAddProduct}
        onChange={handleCheckboxChange}
        onDeleteProduct={handleDeleteProduct}
        products={products}
        setProducts={setProducts}
        setIsConfirmed={setIsConfirmed}
        isConfirmed={isConfirmed}
      />
    </>
  );
}
