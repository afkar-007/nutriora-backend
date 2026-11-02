const mongoose = require("mongoose");

async function ConnectDb() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports=ConnectDb