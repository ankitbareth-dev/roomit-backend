import express, { Application } from "express";
import morgan from "morgan";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";
import roomRoutes from "./routes/room.routes.js";

const app: Application = express();
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
app.use("/api/rooms", roomRoutes);
app.use(globalErrorHandler);

export default app;
