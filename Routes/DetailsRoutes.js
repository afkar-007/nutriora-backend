const express = require("express");
const DetailsRouter = express.Router();

const {
  PersonalDetailsPost,
  PostBodyMeasurement,
  PostNutritionGoals,
  postFoodHabits,
  postLifeStyle,
} = require("../Controllers/personalDetails");

const {
  userGet,
  personalDetailsGet,
  BodyMeasurementsGet,
  NutritionGoalsGet,
  FoodHabitsGet,
  LifeStyleGet,
} = require("../Controllers/getDetails");

DetailsRouter.post("/personalDetails", PersonalDetailsPost);
DetailsRouter.post("/BodyMeasurement", PostBodyMeasurement);
DetailsRouter.post("/NutritionGoals", PostNutritionGoals);
DetailsRouter.post("/FoodHabits", postFoodHabits);
DetailsRouter.post("/LifeStyle", postLifeStyle);

DetailsRouter.get("/userGet/:id", userGet);
DetailsRouter.get("/personalDetailsFetch/:id", personalDetailsGet);
DetailsRouter.get("/BodyMeasurementFetch/:id", BodyMeasurementsGet);
DetailsRouter.get("/NutritionGoalsFetch/:id", NutritionGoalsGet);
DetailsRouter.get("/FoodHabitsFetch/:id", FoodHabitsGet);
DetailsRouter.get("/LifeStyleFetch/:id", LifeStyleGet);

module.exports = DetailsRouter;
