import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export const AuthorModel = model("Author", AuthorSchema);
