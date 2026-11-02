const FoodHabits = require("../Model/FoodHabitsSchema");

async function FoodHabitsPosting(props) {
  const {
    userId,
    dietType,
    mealsPerDay,
    foodAllergies,
    dislikedFoods,
    favoriteCuisines,
    eatingHabits,
    cookingPreference,
    additionalNotes,
  } = props;

  const response = await FoodHabits.create({
    userId:userId,
    dietType: dietType,
    mealsPerDay: mealsPerDay,
    foodAllergies: foodAllergies,
    dislikedFoods: dislikedFoods,
    favoriteCuisines: favoriteCuisines,
    eatingHabits: eatingHabits,
    cookingPreference: cookingPreference,
    additionalNotes: additionalNotes,
  });


  return response
}

module.exports={FoodHabitsPosting}