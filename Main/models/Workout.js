const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Workout extends Model {}

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workout_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workout_length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mood: {
            type: DataTypes.STRING,
            allowNull: false
        },
        new_weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        logged_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW // Sets the default value to the current date and time
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout', // Ensure this is correctly named
    }
)

module.exports = Workout;
