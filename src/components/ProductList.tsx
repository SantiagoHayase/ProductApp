import { ProductCard } from "./ProductCard";

export default async function ProductList({ products }: any) {
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
