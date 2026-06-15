import { InferSchemaType, Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    startTime: {
      type: String,
      required: true,
    },

    endTime: {
      type: String,
      required: true,
    },

    bookedBy: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["confirmed", "cancelled-refundable", "cancelled-non-refundable"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  },
);

export type Booking = InferSchemaType<typeof bookingSchema>;

export const BookingModel = model("Booking", bookingSchema);
