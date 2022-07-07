const express = require('express');
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

// listening for requests on port 4000
app.listen(4000, () => {
    console.log('listening on port 4000');
});