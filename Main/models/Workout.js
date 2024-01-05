const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model {}

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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        new_weight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
      }
)

module.exports = Workout;
