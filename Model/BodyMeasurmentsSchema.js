const mongoose = require("mongoose");

const BodyMeasurementsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  height: {
    type: Number,
    required: true,
  },
  currentWeight: {
    type: Number,
    required: true,
  },
  targetWeight: {
    type: Number,
    
  },
  occupation: {
    type: String,
    
  },
  activityLevel:{
     type: String,
     required:true
  }
});


const BodyMeasurement = mongoose.model("bodyMeasurements",BodyMeasurementsSchema)

module.exports=BodyMeasurement