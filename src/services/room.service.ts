import { RoomModel } from "../models/room.model.js";

export const getAllRooms = async () => {
  return await RoomModel.find().lean();
};

export const getRoomById = async (roomId: string) => {
  return await RoomModel.findById(roomId).lean();
};
