const router = require("express").Router();
const Workout = require("../models/Workout.js");
const Exercise = require("../models/Exercise");
const db = require("../models");
const path = require("path");

//exercise.html
router.get("/exercise", (req, res) => {
  console.log("Called!");
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//stats.html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("/api/workouts"), (req, res) => {
  // Workout.find({})
};

router.get("/api/workouts", (req, res) => {
  // Workout.find({})
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //     //do duration calculation
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.put("/api/workouts/:id", (req, res) => {
  //put request to update workout with id = :id
  // Workout.update({
  //   where: {
  //     _id: req.params.id
  //   }
  // })
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //     //do duration calculation 3:42
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});


router.post("/api/workouts", ({ body }, res) => {
  //create new workout
  // Workout.create(body)
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/api/workouts/range", (req, res) => {
  //Get working in day range.
  // Workout.find({

  // })
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

module.exports = router;
