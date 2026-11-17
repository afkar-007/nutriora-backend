const FoodHabits = require("../Model/FoodHabitsSchema");

async function FoodHabitsPosting(props) {
  const {
    userId,
    dietType,
    mealsPerDay,
    foodAllergies,
    dislikedFoods,
    otherAllergy,
    otherCuisine,
    favoriteCuisines,
    eatingHabits,
    cookingPreference,
    additionalNotes,
  } = props;

  const response = await FoodHabits.create({
    userId:userId,
    dietType: dietType,
    mealsPerDay: mealsPerDay,
    otherCuisine:otherCuisine,
    otherAllergy:otherAllergy,
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