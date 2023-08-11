import { FC } from "react";
import { IProducts } from "@/interface/products";
import Link from "next/link";

export const ProductCard: FC<IProducts> = ({
  id,
  name,
  price,
  discountPrice,
  specialPrice,
}) => {
  return (
    <div className="items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl my-2">{name}</h3>
        <Link href={`/edit/${id}`} className="my-2">
          <button className="px-2 m-2">Editar</button>
        </Link>
      </div>
      <div>
        <p>Precio: ${price}</p>
        <p>Precio con descuento: ${discountPrice}</p>
        <p>Precio especial: ${specialPrice}</p>
      </div>
    </div>
  );
};
