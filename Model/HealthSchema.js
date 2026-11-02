const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    overview: {
      type: String,
      required: true,
    },

    fruits: {
      type: [String],
      default: [],
    },

    vegetables: {
      type: [String],
      default: [],
    },

    guidelines: {
      type: [String],
      default: [],
    },
  

    exercises: [
      {
        day: {
          type: Number,
          required: true,
        },

        title: {
          type: String,
          required: true,
        },

        workouts: [
          {
            name: {
              type: String,
              required: true,
            },

            sets: {
              type: Number,
              default: 0,
            },

            reps: {
              type: Number,
              default: 0,
            },

            duration: {
              type: String,
              default: "",
            },
          },
        ],
      },
    ],

    status: {
      type: String,
      enum: ["Active", "Completed", ],
      default: "Active",
    },
  },

  {
    timestamps: true,
  },
);

const Health = mongoose.model("health", HealthSchema);

module.exports = Health;
