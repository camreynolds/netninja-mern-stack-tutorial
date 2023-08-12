const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  try {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getASingleWorkouts = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id"})
  }

  const workout = await Workout.findById({_id:id})

  if(!workout){
    return res.status(404).json({error: "not such workout"})
  }
  
  res.status(200).json(workout)
}

const createWorkout = async (req,res) =>{
  const {title,load,reps} = req.body

  try {
    const workout = await Workout.create({title,load,reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const updateWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id"})
  }

  const workout = await Workout.findByIdAndUpdate({_id: id}, {...req.body})

  if(!workout){
   return res.status(400).json({error: "not such workout"})
  }

  res.status(200).json(workout)
}

const deleteWorkout = async (req,res) =>{
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "this is not a valid id"})
  }

  const workout = await Workout.findByIdAndDelete({_id: id})

  if(!workout){
    return res.status(400).json({error: "not such a workout"})
  }

  res.status(200).json(workout)
}

module.exports = {createWorkout,getAllWorkouts,getASingleWorkouts,updateWorkout,deleteWorkout}