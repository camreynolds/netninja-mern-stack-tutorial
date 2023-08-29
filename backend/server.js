require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workoutRoutes")
const userRoutes = require("./routes/userRoutes")
const app = express()

app.use(express.json())
app.use( (req,res,next) =>{
  console.log(req.method, req.path)
  next()
})
app.use("/api/workouts", workoutRoutes)
app.use("/api/users", userRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () =>{
      console.log("server & database listening on port:", process.env.PORT);
    })
  )
  .catch( error =>{
    console.error(error);
  })