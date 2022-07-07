require ('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRouter = require('./routes/workout');

// express app
const app = express();

// middleware
app.use(express.json())

app.use( (req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workout', workoutRouter);

// connecto to the database
mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        app.listen(4000, () => {
            console.log('Connected to DB & listening on port ' + process.env.PORT);
        })
    })
    .catch( e => {
        console.error('Database connection failed');
        console.error(e);
    })    