const { getUser } = require("../FetchServices/FetchUser");
const { getPersonalDetails } = require("../FetchServices/FetchPersonalDetails");
const {getBodyMeasurements}= require("../FetchServices/FetchBodyMeasurements")
const {getNutritionGoals}=require("../FetchServices/FetchNutritionGoals")
const {getFoodHabits}=require("../FetchServices/FetchFoodHabits")
const {getLifeStyle}= require("../FetchServices/FetchLifeStyle")

const userGet = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUser(id);

    res.status(200).json({
      message: "User details fetched",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const  personalDetailsGet = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getPersonalDetails(id);

    res.status(200).json({
      message: " personal Details fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const BodyMeasurementsGet = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getBodyMeasurements(id);

    res.status(200).json({
      message: " personal Details fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const NutritionGoalsGet = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getNutritionGoals(id);

    res.status(200).json({
      message: " personal Details fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const FoodHabitsGet = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getFoodHabits(id);

    res.status(200).json({
      message: " personal Details fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const LifeStyleGet = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getLifeStyle(id);

    res.status(200).json({
      message: " personal Details fetched Successfully",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};







module.exports = { userGet , personalDetailsGet,BodyMeasurementsGet , NutritionGoalsGet,FoodHabitsGet , LifeStyleGet};
