const mongoose = require("mongoose")
const Schema = mongoose.Schema
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  }
},{timestamps: true})


userSchema.statics.signup = async function(email,password){
  if(!email || !password){
    throw Error("all the fields must be fill in.")
  }

  if(!validator.isEmail(email)){
    throw Error("you must use a valid email.")
  }

  if(!validator.isStrongPassword(password)){
    throw Error("please, use a strong password.")
  }

  const exist = await this.findOne({email})

  if(exist){
    throw Error("this is email is already in use.")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({email,password: hash})

  return user
}

userSchema.statics.login = async function(email,password){
  if(!email || !password){
    throw Error("all the fields must be fill in.")
  }

  if(!validator.isEmail(email)){
    throw Error("you must use a valid email.")
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error("this user doesn't exist.")
  }

  const match = await bcrypt.compare(password, user.password)
  
  if(!match){
    throw Error("this is not a valid password.")
  }

  return user
}


module.exports = mongoose.model("User", userSchema)