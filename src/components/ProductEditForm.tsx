"use client";
import { IProducts } from "@/interface/products";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductEditForm({
  id,
  name,
  price,
  discountPrice,
  specialPrice,
}: IProducts) {
  const [newPrices, setNewPrices] = useState({
    price,
    discountPrice,
    specialPrice,
  });
  const router = useRouter();

  const handleChange = (e: { target: { name: any; valueAsNumber: any } }) => {
    setNewPrices({ ...newPrices, [e.target.name]: e.target.valueAsNumber });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/products/edit/${id}`, {
        price: newPrices.price,
        discountPrice: newPrices.discountPrice,
        specialPrice: newPrices.specialPrice,
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="px-5">Artículo: {name}</h2>
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl py-6 p-4 w-60 mx-10"
      >
        <label className="font-semibold">Precio:</label>
        <input
          type="number"
          name="price"
          value={newPrices.price}
          onChange={handleChange}
          className="m-2"
        />

        <label className="font-semibold">Precio con descuento: </label>
        <input
          type="number"
          name="discountPrice"
          value={newPrices.discountPrice}
          onChange={handleChange}
          className="m-2"
        />

        <label className="font-semibold">Precio especial: </label>
        <input
          type="number"
          name="specialPrice"
          value={newPrices.specialPrice}
          onChange={handleChange}
          className="m-2"
        />
        <button className="px-2 m-2">Guardar</button>
      </form>
    </div>
  );
}
