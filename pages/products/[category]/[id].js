import { useRouter } from "next/router";

export default function ProductDetails({products}) {
  const router = useRouter();
  const { id } = router.query; 

 const product = products.find(product => product.id === id);

  return (
    <>
     <ul>
        <li key={id}>
{product.name}
        </li>

     </ul>
     
    </> 

  );
}