const Health = require("../Model/HealthSchema");

async function createHealthPlan(data) {
  const { clientId, overview, fruits, vegetables, guidelines, exercises } =
    data;

  const response = await Health.create({
    clientId: clientId,
    overview: overview,
    fruits: fruits,
    vegetables: vegetables,
    guidelines: guidelines,
    exercises: exercises,
  });

  return response;
}

async function getHealthPlan() {
  const response = await Health.find().populate("clientId", "name");

  return response;
}

async function getOneHealthPlan(id) {
  const response = await Health.findById(id).populate("clientId", "name");

  return response;
}

async function DeleteHealthPlan(id) {
  const response = await Health.findByIdAndDelete(id);

  return response;
}

async function ClientHealthPlan(id) {
  const response = await Health.findOne({
    clientId: id,
  })
  return response;
}


async function UpdateClientPlan(id,status) {

  const response =await Health.findByIdAndUpdate(id,{
    status:status
  })

  return response
  
}






module.exports = {
  createHealthPlan,
  getHealthPlan,
  getOneHealthPlan,
  DeleteHealthPlan,
  ClientHealthPlan,
  UpdateClientPlan
};
