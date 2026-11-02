const DietPlan = require("../Model/DietPlanSchema");

async function getDietPlan() {
  const response = await DietPlan.find().populate("clientId", "name");

  return response;
}

async function getOneDietPlan(id) {
  const response = await DietPlan.findOne({
    clientId: id,
  });

  return response;
}

async function getDietPlanOne(id) {
  const response = await DietPlan.findById(id)

  return response;
}

async function ChangeIsCompletedDietPlan(id,data) {

  const response = await DietPlan.findByIdAndUpdate(id,{
    isCompleted:data
  })
  return response
  
}





module.exports = { getDietPlan, getOneDietPlan , getDietPlanOne ,ChangeIsCompletedDietPlan };
