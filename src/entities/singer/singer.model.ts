import { Schema, model } from "mongoose";

const SingerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export const Singer = model("Singer", SingerSchema);
