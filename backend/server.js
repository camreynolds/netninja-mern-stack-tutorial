require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()

const Workout = require("./routes/workouts")

app.use(express.json())
app.use( (req,res,next) =>{
  console.log(req.path, req.method)
  next()
})

app.use("/api/workouts/", Workout)

mongoose.connect(process.env.MONGO_URI)
  .then( () =>{
    app.listen(process.env.PORT, () =>{
      console.log("server listening on port:", process.env.PORT);
    })
  })
  .catch( error => console.log(error))