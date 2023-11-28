import express from "express";
import bcrypt from "bcrypt";
import { getUser, registerUser } from "../Controllers/user.js";
import { generateToken } from "../Auth/auth.js";
const router = express.Router();
//signup
router.post("/signup", async (req, res) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Invalid request" });
    }
    // generate salt value
    const salt = await bcrypt.genSalt(10);
    // is the user already registerd
    const checkUser = await getUser(req.body.email);
    if (!checkUser) {
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const encryptUser = await { ...req.body, password: hashedPass };
      const user = await registerUser(encryptUser);
      if (!user.acknowledged) {
        return res.status(400).json({ error: "Failed Registration" });
      }
      return res
        .status(201)
        .json({ message: "Registered sucessfuly", data: user });
    }
    res.status(400).json({ error: "User already exist" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Invalid request" });
    }
    const checkUser = await getUser(req.body.email);
    if (!checkUser) {
      return res.status(404).json({ error: "Invalid Email" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }
    const token = generateToken(checkUser._id);

    res.status(200).json({ message: "Logged in succesfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

export const userRouter = router;
