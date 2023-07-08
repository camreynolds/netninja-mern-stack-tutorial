const mongoose = require("mongoose")
const Workout = require("../models/workoutModel")

const getAllWorkouts = async (req,res) =>{
  const workouts = await Workout.find().sort({createdAt: -1})
  res.status(200).json(workouts)
}

const getSingleWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findById({_id:id})

  if(!workout){
    return res.status(400).json({error: "Not such workout."})
  }

  res.status(200).json(workout)
}

const createWorkout = async (req,res) =>{
  const {title, load, reps} = req.body

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findByIdAndUpdate({_id:id}, {...req.body})

  if(!workout){
    return res.status(400).json({error: "not such a workout."})
  }

  res.status(200).json(workout)
}

const deleteWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id."})
  }

  const workout = await Workout.findOneAndDelete({_id:id})

  if(!workout){
    return res.status(400).json({error: "not such workout."})
  }

  res.status(200).json(workout)
}

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}