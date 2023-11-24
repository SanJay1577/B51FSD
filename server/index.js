import express from "express";
import { client } from "./db.js";

// intiating server
const app = express();

//middlewares
app.use(express.json());

//add doctor

app.post("/doctor/add", async (req, res) => {
  // doctor data
  //we need to handle error in req.body
  const data = { ...req.body, status: "Available" };

  // need to make error responses

  // adding data to the db
  //we need to handle error in req.body
  const newDoctor = await client
    .db("Docapp")
    .collection("doctors")
    .insertOne(data);

  res.status(201).json({ data: newDoctor });
});

app.get("/doctor/all", async (req, res) => {
  //get data from db
  const doctors = await client
    .db("Docapp")
    .collection("doctors")
    .find({})
    .toArray();

  res.status(200).json({ data: doctors });
});

app.put("/doctor/edit/:id", (req, res) => {});

app.delete("/doctor/edit/:id", (req, res) => {});

//initiating PORT
const PORT = 9000;

//listening to a server
app.listen(PORT, () => console.log(`Server listning in localhost:${PORT}`));
