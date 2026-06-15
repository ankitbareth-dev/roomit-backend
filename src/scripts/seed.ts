import { connectDB } from "../config/db.js";
import { BookingModel } from "../models/booking.model.js";
import { RoomModel } from "../models/room.model.js";
import { getTodayAndTomorrow } from "../utils/date.js";

const { today, tomorrow } = getTodayAndTomorrow();

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

const seedDatabase = async (): Promise<void> => {
  try {
    await connectDB();

    const roomCount = await RoomModel.countDocuments();

    if (roomCount === 0) {
      await RoomModel.insertMany(rooms);
      console.log("Rooms seeded successfully.");
    } else {
      console.log("Rooms already exist. Skipping.");
    }

    const existingRooms = await RoomModel.find().lean();

    const roomMap = new Map(existingRooms.map((room) => [room.name, room._id]));

    const bookingCount = await BookingModel.countDocuments();

    if (bookingCount === 0) {
      await BookingModel.insertMany([
        {
          room: roomMap.get("Conference Room A"),
          date: today,
          startTime: "09:00",
          endTime: "10:00",
          bookedBy: {
            name: "Ankit",
            email: "ankit@example.com",
          },
          title: "Sprint Planning",
        },
        {
          room: roomMap.get("Conference Room A"),
          date: today,
          startTime: "11:00",
          endTime: "12:00",
          bookedBy: {
            name: "Rahul",
            email: "rahul@example.com",
          },
          title: "Project Discussion",
        },
        {
          room: roomMap.get("Conference Room B"),
          date: today,
          startTime: "10:30",
          endTime: "11:30",
          bookedBy: {
            name: "Aman",
            email: "aman@example.com",
          },
          title: "Client Meeting",
        },
        {
          room: roomMap.get("Meeting Room C"),
          date: tomorrow,
          startTime: "14:00",
          endTime: "15:00",
          bookedBy: {
            name: "Priya",
            email: "priya@example.com",
          },
          title: "Design Review",
        },
        {
          room: roomMap.get("Board Room D"),
          date: tomorrow,
          startTime: "15:30",
          endTime: "16:30",
          bookedBy: {
            name: "Rohit",
            email: "rohit@example.com",
          },
          title: "Management Meeting",
        },
        {
          room: roomMap.get("Conference Room B"),
          date: tomorrow,
          startTime: "17:00",
          endTime: "18:00",
          bookedBy: {
            name: "Neha",
            email: "neha@example.com",
          },
          title: "Interview",
        },
      ]);

      console.log("Bookings seeded successfully.");
    } else {
      console.log("Bookings already exist. Skipping.");
    }

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seedDatabase();
