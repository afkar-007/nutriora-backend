require("dotenv").config()
const express = require("express");
const cors = require("cors");

const ConnectDb = require("./Config/Db");
const UserRouter = require("./Routes/userRoutes")
const DetailsRouter = require("./Routes/DetailsRoutes")
const PlanRouter = require("./Routes/PlanRoutes")
const HealthRouter = require("./Routes/HealthRoutes")
ConnectDb();
const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nutriora-eight.vercel.app"
    ],
    credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("Nutriora backend is running");
});
app.use('/user',UserRouter)
app.use('/details',DetailsRouter)
app.use('/dietPlan',PlanRouter)
app.use('/healthPlan',HealthRouter)

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
