const router = require('express').Router();
const {User, Mood, Workout} = require ('../../models');


//find a mood by the mood id
router.get('./:id', (req,res) =>{
    Mood.findByPK(req.params.id, {
       include:[{model:Workout}] 
    })
    .then ((mood) =>{
        if (!mood){
            res.status(404).json({message:'No mood found with this id!'});
            return;
        }
        res.json(mood);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json(err);
    });
});

//find all moods logged
router.get('./:id', (req,res) =>{
    Mood.findAll(req.params.id, {
       include:[{model:Workout}] 
    })
    .then ((mood) =>{
        res.json(mood);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json(err);
    });
});

//create a new mood log
router.post ('/',(req,res) =>{
    Mood.create({
        mood_name:req.body.mood_name
    })
    .then((newMood) => {
        res.json(newMood);
    })
    .catch((err) => {
        console.error(err);
        res.status(400).json(err);
    })
});

//delete a mood
router.delete('/',(req,res)=> {
    Mood.destroy ({
        where: {
            id:req.params.id
        }
    })
    .then (mood => {
        if (!mood){
            res.status(404).json({message:'No mood found with this id!'});
            return;
        }
        res.json(mood);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;