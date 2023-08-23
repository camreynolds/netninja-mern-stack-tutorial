const express = require("express")
const workoutRouter = express.Router()
const Workout = require("../models/workoutModel")
const {
    createWorkout,
    getAllWorkouts,
    getASingleWorkouts,
    updateWorkout,
    deleteWorkout} 
  = require("../controllers/workoutControllers")

const requireAuth = require("../middleware/requireAuth")

workoutRouter.use(requireAuth)

workoutRouter.get("/", getAllWorkouts)

workoutRouter.get("/:id", getASingleWorkouts)

workoutRouter.post("/", createWorkout)

workoutRouter.patch("/:id", updateWorkout)

workoutRouter.delete("/:id", deleteWorkout)

module.exports = workoutRouter