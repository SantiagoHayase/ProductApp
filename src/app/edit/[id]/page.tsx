import ProductEditForm from "@/components/ProductEditForm";
import axios from "axios";

const getProductsById = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.base_URL}/api/products/edit/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const { product } = await getProductsById(params.id);

  return (
    <div>
      <ProductEditForm
        id={product._id}
        name={product.name}
        price={product.price}
        discountPrice={product.discountPrice}
        specialPrice={product.specialPrice}
      />
    </div>
  );
}
