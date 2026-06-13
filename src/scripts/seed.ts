import { connectDB } from "../config/db.js";
import { RoomModel } from "../models/room.model.js";

const rooms = [
  {
    name: "Conference Room A",
    floor: "1st Floor",
    capacity: 8,
  },
  {
    name: "Conference Room B",
    floor: "2nd Floor",
    capacity: 12,
  },
  {
    name: "Meeting Room C",
    floor: "3rd Floor",
    capacity: 6,
  },
  {
    name: "Board Room D",
    floor: "4th Floor",
    capacity: 20,
  },
];

const seedRooms = async (): Promise<void> => {
  try {
    await connectDB();

    const roomCount = await RoomModel.countDocuments();

    if (roomCount > 0) {
      process.exit(0);
    }

    await RoomModel.insertMany(rooms);

    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

seedRooms();
