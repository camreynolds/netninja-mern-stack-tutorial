const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

const getAllWorkouts = async (req,res) =>{
  const user_id = req.user._id

  try {
    const workout = await Workout.find({user_id}).sort({createdAt: -1})
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
  const emptyFields = []

  if(!title){
    emptyFields.push("title")
  }

  if(!load){
    emptyFields.push("load")
  }

  if(!reps){
    emptyFields.push("reps")
  }

  if(emptyFields.length > 0){
    return res.status(400).json({error: "All the fields must be fullfilled", emptyFields})
  }

  try {
    const user_id = req.user._id
    const workout = await Workout.create({title,load,reps,user_id})
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