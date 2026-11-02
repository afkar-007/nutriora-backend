const mongoose = require("mongoose");

const NutritionGoalsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  primaryGoal: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  motivation: {
    type: String,
    
  },
  challenges: {
    type: [String],
    default:[]
    
  },
  
});


const NutritionGoals = mongoose.model("nutritionGoals",NutritionGoalsSchema)

module.exports=NutritionGoals