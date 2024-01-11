const router = require('express').Router();
const { User, Workout, Mood } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/users/:userId', withAuth, async (req, res) => {
    try {
        const workouts = await Workout.findAll({
            where: { user_id: req.params.userId }
            // include: [{ model: Mood }, { model: User }] // Include these only if needed
        });
        res.json(workouts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Find a workout by the workout id
router.get('/:id', async (req, res) => {
    try {
        const workout = await Workout.findByPk(req.params.id, {
            include: [{ model: Mood }, { model: User }]
        });
        if (!workout) {
            return res.status(404).json({ message: 'No workout found with this id!' });
        }
        res.json(workout);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// // Find all workouts logged for a specific user
// router.get('/users/:userId', withAuth, async (req, res) => {
//     try {
//         const workouts = await Workout.findAll({
//             where: {
//                 user_id: req.params.userId
//             },
//             include: [{ model: Mood }, { model: User }]
//         });
//         res.json(workouts);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });

// Create a new workout log
router.post('/tracker-input', withAuth, async (req, res) => {
    const { workout_type, workout_length, mood, new_weight } = req.body;
    try {
        const newWorkout = await Workout.create({
            workout_type,
            workout_length,
            mood,
            new_weight,
            user_id: req.session.user_id // Assuming this comes from the session
        });
        res.json(newWorkout);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// Delete a workout
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const workout = await Workout.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!workout) {
            return res.status(404).json({ message: 'No workout found with this id!' });
        }
        res.json({ message: 'Workout deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
