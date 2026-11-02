const NutritionGoals = require("../Model/NutritionGoalsSchema");

async function NutritionGoalsPost(props) {
  const { userId, primaryGoal, timeline, motivation, challenges } = props;

  const response = await NutritionGoals.create({
    userId: userId,
    primaryGoal: primaryGoal,
    timeline: timeline,
    motivation: motivation,
    challenges: challenges,
  });

  return response;
}

module.exports = { NutritionGoalsPost };
