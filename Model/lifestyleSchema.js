const mongoose = require("mongoose");

const LifeStyleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  sleepHours: {
    type: String,
    required: true,
  },
  sleepQuality: {
    type: String,
    required: true,
  },
  waterIntake: {
    type: String,
    required: true,
  },
  exerciseFrequency: {
    type: String,
    required: true,
  },
  medications: {
    type: String,
  },
  exerciseType: {
    type: [String],
    default: [],
    required: true,
  },
  waterIntake: {
    type: String,

    required: true,
  },
  activityLevel: {
    type: String,
    required: true,
  },
  stressLevel: {
    type: String,
    required: true,
  },
  // medicalConditions: {
  //   type:[String],
  //   default:[]
  // },
  digestiveIssues: {
    type: String,
  },
  smokingAlcohol: {
    type: String,
    required: true,
  },

  additionalNotes: {
    type: String,
  },
  otherMedicalCondition: {
    type: String,
  },
  afford: {
    type: String,
    required: true,
  },
  eatingRoutine: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
  periodDuration: {
    type: String,
  },

  urinationFrequency:{
    type:String,
    required:true
  }

});

const LifeStyle = mongoose.model("lifeStyle", LifeStyleSchema);

module.exports = LifeStyle;
