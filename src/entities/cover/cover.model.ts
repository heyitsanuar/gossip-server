import { Schema, model } from "mongoose";

const CoverSchema = new Schema({
  uri: {
    type: String,
    required: true,
  },
  isCover: {
    type: Boolean,
    required: false,
  },
});

export const Cover = model("Cover", CoverSchema);
