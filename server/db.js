import { MongoClient } from "mongodb";
const connectionString =
  "mongodb+srv://sanjay:sanjay15@cluster0.u7fcbl5.mongodb.net/";

const localString = "mongodb://127.0.0.1:27017/Docapp";
async function dbConnection() {
  try {
    const client = new MongoClient(localString);
    await client.connect();
    console.log("Database connected");
    return client;
  } catch (error) {
    console.log("Error connecting Database", error);
  }
}
//initlizing DB
export const client = await dbConnection();
