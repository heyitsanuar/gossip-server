import { Schema, model } from "mongoose";

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
