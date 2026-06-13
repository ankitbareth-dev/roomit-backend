import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";
import roomRoutes from "./routes/room.routes.js";
import { env } from "./config/env.js";

const app: Application = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
  }),
);

app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
app.use("/api/rooms", roomRoutes);
app.use(globalErrorHandler);

export default app;
