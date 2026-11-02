const { personalDetails } = require("../Services/PersonalDetails");
const { BodyMeasurementPost } = require("../Services/BodyMeasurement");
const { NutritionGoalsPost } = require("../Services/NutritionGoals");
const { FoodHabitsPosting } = require("../Services/FoodHabits");
const { LifeStylePosting } = require("../Services/LifeStyle");

const PersonalDetailsPost = async (req, res) => {
  try {
    const { userId, fullname, dateOfBirth, phoneNumber, gender, city } =
      req.body;
    const props = {
      userId: userId,
      fullname: fullname,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      gender: gender,
      city: city,
    };

    const response = await personalDetails(props);

    res.status(201).json({
      message: "personal details list created",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const PostBodyMeasurement = async (req, res) => {
  try {
    const {
      userId,
      height,
      currentWeight,
      targetWeight,
      occupation,
      activityLevel,
    } = req.body;

    const props = {
      userId: userId,
      height: height,
      currentWeight: currentWeight,
      targetWeight: targetWeight,
      occupation: occupation,
      activityLevel: activityLevel,
    };

    const response = await BodyMeasurementPost(props);

    res.status(200).json({
      message: "Body measurement Created",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const PostNutritionGoals = async (req, res) => {
  try {
    const { userId, primaryGoal, timeline, motivation, challenges } = req.body;

    const props = {
      userId: userId,
      primaryGoal: primaryGoal,
      timeline: timeline,
      motivation: motivation,
      challenges: challenges,
    };

    const response = await NutritionGoalsPost(props);

    res.status(201).json({
      message: "Nutrition details created",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postFoodHabits = async (req, res) => {
  try {
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
    } = req.body;

    const props = {
      userId: userId,
      dietType: dietType,
      mealsPerDay: mealsPerDay,
      foodAllergies: foodAllergies,
      dislikedFoods: dislikedFoods,
      favoriteCuisines: favoriteCuisines,
      eatingHabits: eatingHabits,
      cookingPreference: cookingPreference,
      additionalNotes: additionalNotes,
    };

    const response = await FoodHabitsPosting(props);
    res.status(201).json({
      message: "Food Habits Created",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postLifeStyle = async (req, res) => {
  try {
    const {
      userId,
      sleepHours,
      sleepQuality,
      waterIntake,
      exerciseFrequency,
      medications,
      exerciseType,
      activityLevel,
      stressLevel,
      medicalConditions,
      digestiveIssues,
      smokingAlcohol,
      additionalNotes,
      eatingRoutine
    } = req.body;

    const props = {
      userId: userId,
      sleepHours: sleepHours,
      sleepQuality: sleepQuality,
      waterIntake: waterIntake,
      exerciseFrequency: exerciseFrequency,
      medications: medications,
      exerciseType: exerciseType,
      activityLevel: activityLevel,
      stressLevel: stressLevel,
      medicalConditions: medicalConditions,
      digestiveIssues: digestiveIssues,
      smokingAlcohol: smokingAlcohol,
      additionalNotes: additionalNotes,
      eatingRoutine:eatingRoutine
    };

    const response = await LifeStylePosting(props);

    res.status(200).json({
      message: "LifeStyle Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  PersonalDetailsPost,
  PostBodyMeasurement,
  PostNutritionGoals,
  postFoodHabits,
  postLifeStyle
};
