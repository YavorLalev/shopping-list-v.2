import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ModalWindow from "@/components/Modal/Modal";
import ProductForm from "@/components/ProductForm/ProductForm";

export default function Detailspage({ products, onEditProduct, setProducts }) {
  const router = useRouter();
  const { id } = router.query;
  const [isEditOpen, setEditOpen] = useState(false);

  const product = products.find((product) => product.id === id);

  function handleEditProduct(updatedProduct) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditOpen(false);
  }

  if (!product) {
    return <p>Loading....</p>;
  }

  const { name, category, quantity, measureUnit } = product;

  return (
    <>
      <ProductDetails
        name={name}
        quantity={quantity}
        measureUnit={measureUnit}
        category={category}
        onEdit={() => setEditOpen(true)}
      />
      <ModalWindow
        modalTitle="Edit your product"
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
      >
        <ProductForm
          initialValues={product}
          onEditProduct={handleEditProduct}
        />
      </ModalWindow>
    </>
  );
}
