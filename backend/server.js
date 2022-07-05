const express = require('express');

// express app
const app = express();

// middleware
app.use( (req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the backend.'});
})

// listening for requests on port 4000
app.listen(4000, () => {
    console.log('listening on port 4000');
});