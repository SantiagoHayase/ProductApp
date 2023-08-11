import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import Product from "@/models/products";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json({ products });
  } catch (error) {
    console.log(error);
  }
}
