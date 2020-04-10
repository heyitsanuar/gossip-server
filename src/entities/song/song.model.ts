import { Schema, model } from "mongoose";

const SongSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

export const SongModel = model("Song", SongSchema);
