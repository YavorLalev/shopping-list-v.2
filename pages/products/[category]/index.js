import { useRouter } from "next/router";
import Product from "@/components/Product/Product";

export default function ProductDetail({products}) {
  const router = useRouter();
  const { category } = router.query; 

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
    <h2>Products in {category} list</h2>
      <div>
        {filteredProducts
        .map(({id, name, quantity,measureUnit}) => (
          <Product
          key={id}
          id={id}
          name={name}
          quantity={quantity}
          measureUnit={measureUnit}
        />
                ))}
      </div>
    </>
  );
}
