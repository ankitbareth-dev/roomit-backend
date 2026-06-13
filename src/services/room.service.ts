import { RoomModel } from "../models/room.model.js";

export const getAllRooms = async () => {
  return await RoomModel.find().lean();
};
