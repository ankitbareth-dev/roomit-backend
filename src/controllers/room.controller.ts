import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync.js";
import { getAllRooms } from "../services/room.service.js";

export const getRooms = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const rooms = await getAllRooms();

    res.status(200).json({
      success: true,
      data: rooms,
    });
  },
);
