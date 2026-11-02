const express = require("express");
const PlanRouter = express.Router();
const{postDietPlan , DietPlanGet,oneDietPlanGet, DelDietPlan , fetchDietPlanOne ,ChangeIsCompleted} = require("../Controllers/clientPlan")



PlanRouter.post("/createPlan",postDietPlan)
PlanRouter.get("/getPlan",DietPlanGet)
PlanRouter.get("/getClientPlan/:id",oneDietPlanGet)
PlanRouter.delete("/DeleteClientPlan/:id",DelDietPlan)
PlanRouter.get("/getOneClientPlan/:id",fetchDietPlanOne)
PlanRouter.put("/updateComplete/:id",ChangeIsCompleted)
module.exports =PlanRouter