import { MongoClient } from "mongodb";
import { env } from "./config/env.js";

const uri = env.MONGODB_URI;

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("MongoDB Connected");

    await client.db("admin").command({ ping: 1 });

    console.log("Ping Successful");
  } catch (error) {
    console.error(" Connection Failed:", error);
  } finally {
    await client.close();
  }
}

testConnection();
