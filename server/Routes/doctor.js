import express from "express";
import {
  addNewDoctor,
  deleteDoctor,
  editDoctor,
  getAllDoctors,
} from "../Controllers/doctor.js";
import { isAuthorized } from "../Auth/auth.js";

// initializing router
const router = express.Router();

// get all doctor data
router.get("/all", async (req, res) => {
  try {
    //get data from db
    const doctors = await getAllDoctors();
    // error handle if no data
    if (doctors.length <= 0) {
      return res.status(404).json({ message: "No data available" });
    }
    res.status(200).json({ data: doctors });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

router.post("/add", async (req, res) => {
  try {
    //we need to handle error in req.body
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Check request body" });
    }
    const data = { ...req.body, status: "Available" };
    // adding new doctor info
    const newDoctor = await addNewDoctor(data);
    if (!newDoctor.acknowledged) {
      return res.status(400).json({ error: "error in adding data" });
    }
    res.status(201).json({ data: newDoctor });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //we need to handle error in req.body
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).json({ error: "Check request body" });
    }
    //updating doctor
    const newlyUpdatedDoctor = await editDoctor(id, req.body);
    if (!newlyUpdatedDoctor.acknowledged) {
      return res.status(400).json({ error: "error in updating data" });
    }
    res.status(200).json({ data: newlyUpdatedDoctor });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //deleting a doctor
    const doctorToDelete = await deleteDoctor(id);
    if (!doctorToDelete.acknowledged) {
      return res.status(400).json({ error: "error in deleting data" });
    }
    res.status(200).json({ data: doctorToDelete });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", erorrMessage: error });
  }
});
export const doctorRouter = router;
