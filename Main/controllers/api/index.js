const router = require ('express').Router();
const moodRoutes = require('./moodRoutes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
// setting up sequelize connection
// const { sequelize } = require('../../config/connection');

router.use ('/mood',moodRoutes);
router.use ('/users',userRoutes);
router.use('/workout', workoutRoutes);
// router.use('/sequelize', sequelize);

module.exports = router;
