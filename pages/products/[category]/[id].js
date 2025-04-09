import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export default function Detailspage({products}) {
  const router = useRouter();
  const { id } = router.query; 

  const product = products.find(product => product.id === id);
  
  const {name, category, quantity, measureUnit} = product;
  return (
    <>
      <ProductDetails
       name={name}
       quantity={quantity}
       measureUnit={measureUnit}
       category={category}
      />
    </> 
  );
}