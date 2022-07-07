const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel');

// GET ALL THE WORKOUTS
router.get('/', (req,res) => {
    res.json({mssg:'GET all the workouts'}); 
})

// GET A SINGLE WORKOUT
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST A NEW WORKOUT
router.post('/', async (req,res) => {
    const {title,reps,load} = req.body;

    try{
        const workout = await Workout.create({title,reps,load});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

// UPDATE A WORKOUT
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a single workout'})
})

// DELETE A WORKOUT
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a workout'})
})

module.exports = router;