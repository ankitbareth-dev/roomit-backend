import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync.js";
import { getAllRooms, getRoomById } from "../services/room.service.js";

type RoomParams = {
  id: string;
};

export const getAllRoomsController = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const rooms = await getAllRooms();

    res.status(200).json({
      success: true,
      data: rooms,
    });
  },
);

export const getRoomByIdController = catchAsync(
  async (req: Request<RoomParams>, res: Response): Promise<void> => {
    const room = await getRoomById(req.params.id);

    if (!room) {
      res.status(404).json({
        success: false,
        message: "Room not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: room,
    });
  },
);
