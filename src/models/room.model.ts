import { Schema, model, InferSchemaType } from "mongoose";

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    floor: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  },
);

export type Room = InferSchemaType<typeof roomSchema>;

export const RoomModel = model("Room", roomSchema);
