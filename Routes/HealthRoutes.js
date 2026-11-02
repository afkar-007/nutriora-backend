const express = require("express");
const HealthRouter = express.Router();

const {postHealthPlan,fetchAllHealthPlan,fetchOneHealthPlan,removeOnePlan,fetchClientPlan,clientPlanUpdate}=require("../Controllers/HealthDetails")

HealthRouter.post("/HealthPost/:id",postHealthPlan)
HealthRouter.get("/healthAllGet",fetchAllHealthPlan)
HealthRouter.get("/healthOneGet/:id",fetchOneHealthPlan)
HealthRouter.delete("/deleteOnePlan/:id",removeOnePlan)
HealthRouter.get("/clientWorkout/:id",fetchClientPlan)
HealthRouter.put("/updateWorkout/:id",clientPlanUpdate)

module.exports=HealthRouter
