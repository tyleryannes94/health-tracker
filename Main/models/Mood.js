const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Mood extends Model {}

Mood.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        mood_new: {
            type: DataTypes.STRING,
            allowNull: false
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

module.exports = Mood;
