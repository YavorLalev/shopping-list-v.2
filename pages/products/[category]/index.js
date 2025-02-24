import { useRouter } from "next/router";

export default function ProductDetail({products}) {
  const router = useRouter();
  const { category } = router.query; 

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
    <h2>Products in {category} list</h2>
      <ul>
        {filteredProducts
        .map(({id, name, quantity,measureUnit}) => (
                  <li key={id}>
                    {name} <span>&times;</span> {quantity} {measureUnit}
                  </li>
                ))}
      </ul>
    </>
  );
}
