const mongoose = require("mongoose");

const FoodHabitsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dietType: {
    type: String,
    required: true,
  },
  mealsPerDay: {
    type: String,
    required: true,
  },
  foodAllergies: {
    type: [String],
    default: [],
    required: true,
  },
  dislikedFoods: {
    type: String,
  },

  favoriteCuisines: {
    type: [String],
    default: [],
    required: true,
  },

  eatingHabits: {
    type: String,
  },

  cookingPreference: {
    type: String,
    required: true,
  },

  additionalNotes: {
    type: String,
  },
});

const FoodHabits = mongoose.model("foodHabits", FoodHabitsSchema);

module.exports = FoodHabits;
