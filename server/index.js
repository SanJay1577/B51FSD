import express from "express";
import { doctorRouter } from "./Routes/doctor.js";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./Routes/user.js";
import { isAuthorized } from "./Auth/auth.js";
// intiating server
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//env configuration
dotenv.config();
//initiating PORT
const PORT = process.env.PORT;

// applicational routes
app.use("/doctor", isAuthorized, doctorRouter);
app.use("/user", userRouter);

//listening to a server
app.listen(PORT, () => console.log(`Server listning in localhost:${PORT}`));
