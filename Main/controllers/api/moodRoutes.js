const router = require('express').Router();
const {User, Mood, Workout} = require ('../../models');
const withAuth = require('../../utils/auth');


//find a mood by the mood id
router.get('/:id', (req,res) =>{
    Mood.findByPK(req.params.id, {
       include:[{model:Workout}, {model:User}] 
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
router.get('/:id', (req,res) =>{
    Mood.findAll(req.params.id, {
        include:[{model:Workout}, {model:User}] 
    })
    .then ((mood) =>{
        res.json(mood);
    })
    .catch((err) =>{
        console.error(err);
        res.status(500).json(err);
    });
});

// Create a new mood log
router.post('/', withAuth, (req, res) => {
    // Assuming mood_name is the correct field and it's expected to be in the request body
    const { mood_name } = req.body;

    // Check if mood_name is provided
    if (!mood_name) {
        return res.status(400).json({ message: 'Mood name is required' });
    }

    Mood.create({ mood_name })
        .then(newMood => {
            res.status(201).json(newMood);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error creating new mood log', error: err.message });
        });
});

//delete a mood
router.delete('/:id',withAuth,(req,res)=> {
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