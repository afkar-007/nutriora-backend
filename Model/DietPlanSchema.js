const mongoose = require("mongoose");

const DietPlanSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    days: {
      type: [Object],
      default: [],
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Completed"],
      default: "Active",
    },
    
  },

  {
    timestamps: true,
  },
);

const DietPlan = mongoose.model("dietplan", DietPlanSchema);

module.exports = DietPlan;
