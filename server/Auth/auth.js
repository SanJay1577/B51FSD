import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function generateToken(id) {
  return jwt.sign({ id }, process.env.SECRET_KEY);
}

// authorization middleware

export function isAuthorized(req, res, next) {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({ error: "Access denied" });
  }
  jwt.verify(token, process.env.SECRET_KEY);
  next();
}
