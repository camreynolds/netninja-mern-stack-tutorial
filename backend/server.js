require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const workoutsRoutes = require("./routes/workoutsRoutes")
const userRoutes = require("./routes/usersRoutes")

app.use(express.json())
app.use( (req,res,next) =>{
  console.log(req.path, req.method)
  next()
})

app.use("/api/workouts", workoutsRoutes)
app.use("/api/users", userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(
  app.listen(process.env.PORT, () =>{
    console.log("server & database running at port:", process.env.PORT);
  })
)
.catch( e => {
  console.log("error: ", error.mssg);
})