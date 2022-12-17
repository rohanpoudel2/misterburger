import mongoose from 'mongoose'

interface Product {
  title: string,
  desc: string,
  img: string,
  prices: number[],
}

const ProductSchema = new mongoose.Schema<Product>({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200
  },
  img: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true
  },
}, { timestamps: true });


export default mongoose.models.Product || mongoose.model("Product", ProductSchema);