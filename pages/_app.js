import GlobalStyle from "../styles";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {

const [products, setProducts] = useLocalStorageState('products', {
  defaultValue: []});

    function handleAddProduct(newProduct) {
        setProducts([...products, {...newProduct, id: uid()}])

}
console.log(products);
  return (
    <>
      <GlobalStyle />
      <Component 
    {...pageProps}
    onAddProduct = {handleAddProduct}
    products = {products}
      />
    </>
  );
}
