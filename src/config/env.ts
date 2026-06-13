import dotenv from "dotenv";

dotenv.config();

const { PORT, MONGODB_URI, CLIENT_URL } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required");
}

export const env = {
  PORT: Number(PORT) || 5000,
  MONGODB_URI,
  CLIENT_URL,
};
