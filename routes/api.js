// Browser routes back end code
const router = require("express").Router();
const Workout = require("../models/workout.js")

router.post("/api/workout", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.get()
// update put route
router.put("/api/workout/:id", (req,res) =>{
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {ecercise: req.body}},
        { new: true}
    )
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

// get route get all
// router.get("/all")

// get select range of workouts

// delete route

module.exports = router;



