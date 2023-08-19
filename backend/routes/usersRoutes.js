const express = require("express")
const userRoutes = express.Router()
const {login, signup} = require("../controllers/userControllers")

userRoutes.post("/login", login)

userRoutes.post("/signup", signup)

module.exports = userRoutes