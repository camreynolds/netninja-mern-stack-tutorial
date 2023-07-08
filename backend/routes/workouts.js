const express = require("express")
const route = express.Router()
const {
  getAllWorkouts, 
  getSingleWorkout, 
  createWorkout, 
  updateWorkout, 
  deleteWorkout} = require("../controllers/workoutControllers")

route.get("/", getAllWorkouts)

route.get("/:id", getSingleWorkout)

route.post("/", createWorkout)

route.patch("/:id", updateWorkout)

route.delete("/:id", deleteWorkout)

module.exports = route