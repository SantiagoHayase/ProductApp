export const dynamic = "force-dynamic";
import ProductList from "@/components/ProductList";

async function getDogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/getProduct`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const { products } = await getDogs();
  return (
    <div className="m-10">
      <ProductList products={products} />
    </div>
  );
}
