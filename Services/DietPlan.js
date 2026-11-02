const DietPlan = require("../Model/DietPlanSchema");

async function DietPlanPost(props) {
  const { clientId, days, endDate, startDate, title } = props;

  const response = await DietPlan.create({
    clientId: clientId,
    days: days,
    endDate: endDate,
    startDate: startDate,
    title: title,
  });

  return response




}

async function DietPlanEdit(id,status) {

  const response = await DietPlan.findByIdAndUpdate(id,{
    status:status
  })

  return response

  
}

async function DeleteDietPlan(id) {
  console.log("Received ID:", id);

  const response = await DietPlan.findByIdAndDelete(id);

  console.log("Deleted Document:", response);

  const check = await DietPlan.findById(id);

  console.log("After Delete Check:", check);

  return response;
}






module.exports={DietPlanPost,DietPlanEdit,DeleteDietPlan}

