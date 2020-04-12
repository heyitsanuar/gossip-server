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
  singer: {
    type: Schema.Types.ObjectId,
    ref: "Singer",
    required: true,
  },
});

export const Song = model("Song", SongSchema);
