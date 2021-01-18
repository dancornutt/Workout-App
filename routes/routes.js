const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkouts => {
      console.log("all workouts", dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.put("/api/workouts/:id", (req, res) => {
//   // put request to update workout with id = :id
//   Workout.update({
//     where: {
//       _id: req.params.id
//     }
//   })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//       //do duration calculation 3:42
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


// router.post("/api/workouts", ({ body }, res) => {
//   // create new workout
//   Workout.create(body)
//     .then(dbWorkout => {
//       console.log(dbWorkout);
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.get("/api/workouts/range", (req, res) => {
  //Get working in day range.
  db.Workout.find({})
    .then(dbWorkouts => {
      console.log("range", dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  // Workout
  //   .aggregate([
  //     {
  //       $sort:
  //         {
  //           day: 1
  //         }
  //     },
  //     {
  //       $limit: 7
  //     }, 
  //     { 
  //       $addFields:
  //         {
  //           totalDuration:
  //           {
  //             $sum: "exercises.duration"
  //           }
  //         }
  //     }
  //   ])
  //   .then(dbWorkout => {
  //     console.log(dbWorkout);
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
});

module.exports = router;
