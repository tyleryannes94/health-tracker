const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

// Import models
const User = require('./User');
const Mood = require('./Mood');
const Workout = require('./Workout');

// User-Workout association
User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

// User-Mood association
User.hasMany(Mood, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

Mood.belongsTo(User, {
    foreignKey: 'user_id'
});

// Export models and sequelize connection
module.exports = {
    sequelize,
    Sequelize,
    User,
    Mood,
    Workout
};