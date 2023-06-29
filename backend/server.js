require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")


app.use(express.json())
app.use( (req,res,next) => {
  console.log(req.path, req.method)
  next()
})

app.get("/", (req,res) => {
  res.status(200).json("mssg: Welcome to the app.")
})

mongoose.connect(process.env.DB_URI)
.then(
  app.listen(process.env.PORT, () =>{
    console.log("server & database running on port:", process.env.PORT)
  })
)
.catch( (error) => {
  console.log(error)}
  )