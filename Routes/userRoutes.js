const express = require("express")
const UserRouter = express.Router()

const {PostUser,loginUser,changeProfile ,fetchUsers ,ChangeHasDietPlan,fetchOneUser}= require("../Controllers/user")


UserRouter.post("/register",PostUser)
UserRouter.post("/login",loginUser)
UserRouter.post("/changeProfile/:id",changeProfile)
UserRouter.get("/users",fetchUsers)
UserRouter.put("/ChangeDietPlan/:id",ChangeHasDietPlan)
UserRouter.get("/getOneUser/:id",fetchOneUser)
module.exports= UserRouter
