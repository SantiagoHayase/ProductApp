import axios from "axios";
import { ProductCard } from "./ProductCard";

const getProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/get`
    );
    return data;
  } catch (error) {
    console.log("Error loading products", error);
  }
};

export default async function ProductList() {
  const { products } = await getProducts();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product: any) => (
        <ProductCard
          key={product._id}
          id={product._id}
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          specialPrice={product.specialPrice}
        />
      ))}
    </div>
  );
}
