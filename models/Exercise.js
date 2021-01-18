const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    duration: {
      type: Number,
      trim: true
    },
    name: {
      type: Number,
      trim: true
    },
    name: {
      type: Number,
      trim: true
    },
    name: {
      type: Number,
      trim: true
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
