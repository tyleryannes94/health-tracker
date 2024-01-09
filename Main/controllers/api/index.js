const router = require ('express').Router();
const moodRoutes = require('./moodRoutes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use ('/mood',moodRoutes);
router.use ('/users',userRoutes);
router.use ('/workout',workoutRoutes);

module.exports = router;
