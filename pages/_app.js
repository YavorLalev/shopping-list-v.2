import GlobalStyle from "../styles";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {

const [products, setProducts] = useLocalStorageState('products', {
  defaultValue: []});

  function handleAddProduct(newProduct) {
        setProducts([...products, {...newProduct, id: uid(), isCompleted: false}])

}

function handleCheckboxChange(productId) {
setProducts((prevProducts) => 
  prevProducts.map((product) => 
    product.id === productId ? {...product, isCompleted: !product.isCompleted } : product))
}

  return (
    <>
      <GlobalStyle />
      <Component 
    {...pageProps}
    onAddProduct = {handleAddProduct}
    onChange={handleCheckboxChange}
    products = {products}
      />
    </>
  );
}
