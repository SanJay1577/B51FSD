import express from "express";
import { doctorRouter } from "./Routes/doctor.js";

// intiating server
const app = express();

//middlewares
app.use(express.json());

//initiating PORT
const PORT = 9000;

// applicational routes
app.use("/doctor", doctorRouter);

//listening to a server
app.listen(PORT, () => console.log(`Server listning in localhost:${PORT}`));
