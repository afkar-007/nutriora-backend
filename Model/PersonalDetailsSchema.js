const mongoose = require("mongoose");

const personalDetailsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
  },
  fullname: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
   
  },
  city:{
     type: String
  }
});


const PerDetails = mongoose.model("personalDetails",personalDetailsSchema)

module.exports=PerDetails