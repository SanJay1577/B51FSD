import express from "express";
import { doctorRouter } from "./Routes/doctor.js";
import dotenv from "dotenv";
// intiating server
const app = express();

//middlewares
app.use(express.json());

//env configuration
dotenv.config();
//initiating PORT
const PORT = process.env.PORT;

// applicational routes
app.use("/doctor", doctorRouter);

//listening to a server
app.listen(PORT, () => console.log(`Server listning in localhost:${PORT}`));
