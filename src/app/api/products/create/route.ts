import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Product from "@/models/products";

export async function POST(request: Request) {
  const { name, price, discountPrice, specialPrice } = await request.json();

  try {
    await connectDB();
    const productFound = await Product.findOne({ name });
    if (productFound) {
      return NextResponse.json(
        {
          message: "Item already exists",
        },
        { status: 409 }
      );
    }

    const product = new Product({
      name,
      price,
      discountPrice,
      specialPrice,
    });

    const savedProduct = await product.save();

    return NextResponse.json(savedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
