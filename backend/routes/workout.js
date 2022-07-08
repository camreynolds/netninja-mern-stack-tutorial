const express = require('express');
const router = express.Router();
const {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout} = require('../controllers/workoutController');

// GET ALL THE WORKOUTS
router.get('/', getWorkouts);

// GET A SINGLE WORKOUT
router.get('/:id', getWorkout);

// POST A NEW WORKOUT
router.post('/', createWorkout);

// UPDATE A WORKOUT
router.patch('/:id', updateWorkout);

// DELETE A WORKOUT
router.delete('/:id', deleteWorkout);

module.exports = router;