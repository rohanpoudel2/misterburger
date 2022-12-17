import mongoose, { Mongoose } from "mongoose";

interface Orders {
  customer: string,
  address: string,
  total: number,
  status: number,
  method: number,
}

const OrderSchema = new mongoose.Schema<Orders>(
  {
    customer: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      default: 0
    },
    method: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);