import { Schema, model } from "mongoose";

export interface IAuthor {
  name: string;
  lastName: string;
}

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

export const Author = model("Author", AuthorSchema);
