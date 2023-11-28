import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.MONGO_URL;

const localString = "mongodb://127.0.0.1:27017/Docapp";
async function dbConnection() {
  try {
    const client = new MongoClient(connectionString);
    await client.connect();
    console.log("Database connected");
    return client;
  } catch (error) {
    console.log("Error connecting Database", error);
  }
}
//initlizing DB
export const client = await dbConnection();
