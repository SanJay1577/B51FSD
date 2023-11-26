import { ObjectId } from "bson";
import { client } from "../db.js";

export function getAllDoctors() {
  return client.db("Docapp").collection("doctors").find({}).toArray();
}

export function addNewDoctor(data) {
  return client.db("Docapp").collection("doctors").insertOne(data);
}

export function editDoctor(id, data) {
  return client
    .db("Docapp")
    .collection("doctors")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export function deleteDoctor(id) {
  return client
    .db("Docapp")
    .collection("doctors")
    .deleteOne({ _id: new ObjectId(id) });
}
