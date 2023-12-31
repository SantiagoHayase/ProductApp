import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  specialPrice: { type: Number, required: true },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
