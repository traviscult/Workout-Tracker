const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
        exerciseType: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
        },
        // exercise name required
        // duration required 
        // weight
        // reps
        // sets
        // distance
    }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout
