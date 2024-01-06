const router = require('express').Router();
const {User, Workout, Mood} = require ('../../models');
const withAuth = require('../../utils/auth'); 

//find a workout by the workout id
router.get('./:id', (req,res) =>{
    Workout.findByPK(req.params.id, {
       include:[{model:Mood}, {model:User}] 
    })
    .then ((workout) =>{
        if (!workout){
            res.status(404).json({message:'No workout found with this id!'});
            return;
        }
        res.json(workout);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json(err);
    });
});

//find all workouts logged
router.get('/:id', (req,res) =>{
    Workout.findAll(req.params.id, {
        include:[{model:Mood}, {model:User}] 
    })
    .then ((workout) =>{
        res.json(workout);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json(err);
    });
});

//create a new workout log
router.post ('/',withAuth,(req,res) =>{
    Workout.create({
        workout_name:req.body.workout //may need to update this line!
    })
    .then((newWorkout) => {
        res.json(newWorkout);
    })
    .catch((err) => {
        console.error(err);
        res.status(400).json(err);
    })
});

//delete a workout
router.delete('/:id',withAuth,(req,res)=> {
    Workout.destroy ({
        where: {
            id:req.params.id
        }
    })
    .then (workout => {
        if (!workout){
            res.status(404).json({message:'No workout found with this id!'});
            return;
        }
        res.json(workout);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;