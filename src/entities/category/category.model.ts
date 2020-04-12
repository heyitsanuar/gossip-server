import { Schema, model } from "mongoose";

export interface ICategory {
  title: string;
  order: number;
  isActive: boolean;
}

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

export const Category = model("Category", CategorySchema);
