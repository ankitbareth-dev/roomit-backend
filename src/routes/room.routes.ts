import { Router } from "express";
import {
  getAllRoomsController,
  getRoomByIdController,
} from "../controllers/room.controller.js";

const router = Router();

router.get("/", getAllRoomsController);
router.get("/:id", getRoomByIdController);

export default router;
