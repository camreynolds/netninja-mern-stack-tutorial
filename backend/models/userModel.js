const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const validator = require("validator")

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
},{timestamps: true})

userSchema.statics.signup = async function(email,password){
  if(!email || !password){
    throw Error("All the fields must be fill in")
  }

  if(!validator.isEmail(email)){
    throw Error("you must use a valid email")
  }

  if(!validator.isStrongPassword(password)){
    throw Error("you must use a strong password")
  }

  const exist = await this.findOne({email})

  if(exist){
    throw Error("This email is already in used")
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)

  const user = await this.create({email, password: hash})

  return user
}

userSchema.statics.login = async function(email,password){
  if(!email || !password){
    throw Error("All the fields must be fill in")
  }

  if(!validator.isEmail(email)){
    throw Error("this is not a valid email")
  }
  
  const user = await this.findOne({email})

  if(!user){
    throw Error("This is not valid user")
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error("Incorrect password")
  }

  return user
}


module.exports = mongoose.model("User", userSchema)