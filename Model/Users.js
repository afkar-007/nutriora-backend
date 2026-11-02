const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client",
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    hasDietPlans:{
      type:Boolean,
      default:false
    }





  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("user", userSchema);

module.exports = Users;
