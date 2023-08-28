const express = require("express")
const workoutRoutes = express.Router()
const {
  getAllWorkouts,
  getSingleWorkout,
  createSingleWorkout,
  updateSingleWorkout,
  deleteSingleWorkout
} = require("../controllers/workoutControllers")

workoutRoutes.get("/", getAllWorkouts)

workoutRoutes.get("/:id", getSingleWorkout)

workoutRoutes.post("/", createSingleWorkout)

workoutRoutes.patch("/:id",updateSingleWorkout)

workoutRoutes.delete("/:id", deleteSingleWorkout)

module.exports = workoutRoutes