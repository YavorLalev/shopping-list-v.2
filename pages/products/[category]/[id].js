import { useRouter } from "next/router";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export default function Detailspage({products}) {
  const router = useRouter();
  const { id } = router.query; 
  
  return (
    <>
      <ProductDetails
       products={products}
       id={id}
      />
    </> 
  );
}