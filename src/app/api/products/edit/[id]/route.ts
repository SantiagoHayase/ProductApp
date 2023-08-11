import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Product from "@/models/products";

export async function PUT(request: Request, { params }: any) {
  const { price, discountPrice, specialPrice } = await request.json();
  const { id } = params;
  try {
    await connectDB();

    const products = await Product.findByIdAndUpdate(
      { _id: id },
      { price, discountPrice, specialPrice }
    );

    return NextResponse.json(
      { message: "Producto actualizado" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: Request, { params }: any) {
  const { id } = params;
  try {
    await connectDB();

    const product = await Product.findOne({ _id: id });

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
