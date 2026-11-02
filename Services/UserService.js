const Users = require("../Model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findOne } = require("../Model/BodyMeasurmentsSchema");

async function userPost(name, email, password) {
  const existingName = await Users.findOne({ name: name });

  if (existingName) {
    throw new Error("UserName already exist Change UserName ");
    return;
  }

  const existingEmail = await Users.findOne({
    email: email,
  });

  if (existingEmail) {
    throw new Error("Email already exist Change Email ");
    return;
  }

  const passHash = await bcrypt.hash(password, 10);

  const user = await Users.create({
    name: name,
    email: email,
    password: passHash,
  });

  return user;
}

async function userLogin(email, password) {
  const logUser = await Users.findOne({
    email: email,
  });

  if (!logUser) {
    throw new Error("User not found");
  }

  const checkPass = await bcrypt.compare(password, logUser.password);

  if (!checkPass) {
    throw new Error("invalid email or password");
  }

  const token = jwt.sign({ id: logUser._id }, process.env.JWT_SECRET);

  return {
    profile:logUser.profileCompleted,
    message: "Login Successful",
    token: token,
    userId: logUser._id,
    role: logUser.role,
  };
}

async function changeProfileComplete(id, profileCompleted) {
  const response = await Users.findByIdAndUpdate(id, {
    profileCompleted: profileCompleted,
  });

  return response
}


async function GetUsers() {
  const response = await Users.find().select("-Password")

  return response
  
}

async function hasDietPlanChange(id,hasDietPlans) {
  

  const response = await Users.findByIdAndUpdate(id,{
    hasDietPlans:hasDietPlans

  })

  return response



  
}

async function getOneUser(id) {

  const response = await Users.findById(id).select("-password")

  return response
  
}








module.exports = { userPost, userLogin ,changeProfileComplete,GetUsers,hasDietPlanChange,getOneUser};
