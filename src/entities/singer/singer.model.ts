import { Schema, model } from "mongoose";

export interface ISinger {
  name: string;
  lastName: string;
}

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
