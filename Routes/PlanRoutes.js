const express = require("express");
const PlanRouter = express.Router();
const{postDietPlan , DietPlanGet,oneDietPlanGet, EditDietPlan , fetchDietPlanOne ,ChangeIsCompleted} = require("../Controllers/clientPlan")



PlanRouter.post("/createPlan",postDietPlan)
PlanRouter.get("/getPlan",DietPlanGet)
PlanRouter.get("/getClientPlan/:id",oneDietPlanGet)
PlanRouter.delete("/DeleteClientPlan/:id",EditDietPlan)
PlanRouter.get("/getOneClientPlan/:id",fetchDietPlanOne)
PlanRouter.put("/updateComplete/:id",ChangeIsCompleted)
module.exports =PlanRouter