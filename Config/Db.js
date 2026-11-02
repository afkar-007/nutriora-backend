const mongoose = require("mongoose");

async function ConnectDb() {
  try {
    mongoose.connect("mongodb://localhost:27017/Nutriora");
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports=ConnectDb