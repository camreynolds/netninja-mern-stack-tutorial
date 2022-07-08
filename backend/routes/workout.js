const express = require('express');
const router = express.Router();
const {createWorkout,getWorkouts,getWorkout} = require('../controllers/workoutController');

// GET ALL THE WORKOUTS
router.get('/', getWorkouts);

// GET A SINGLE WORKOUT
router.get('/:id', getWorkout);

// POST A NEW WORKOUT
router.post('/', createWorkout);

// UPDATE A WORKOUT
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a single workout'})
});

// DELETE A WORKOUT
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a workout'})
});

module.exports = router;