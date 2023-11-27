import { client } from "../db.js";

export function registerUser(data) {
  return client.db("Docapp").collection("users").insertOne(data);
}

export function getUser(userEmail) {
  return client.db("Docapp").collection("users").findOne({ email: userEmail });
}
