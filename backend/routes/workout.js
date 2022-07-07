const express = require('express');
const router = express.Router();

// GET ALL THE WORKOUTS
router.get('/', (req,res) => {
    res.json({mssg:'GET all the workouts'}); 
})

// GET A SINGLE WORKOUT
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST A NEW WORKOUT
router.post('/', (req,res) => {
    res.json({mssg: 'POST a new workout'})
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