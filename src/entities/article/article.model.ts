import { Schema, model, SchemaType } from "mongoose";

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  ],
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cover",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Article = model("Article", ArticleSchema);
