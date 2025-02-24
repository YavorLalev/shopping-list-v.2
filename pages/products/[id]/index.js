import { useRouter } from "next/router";


export default function DetailsPage({ theme }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>Product</div>
    </>
  );
}
