const { DataTypes,Sequelize } = require('sequelize');
const sequelize = require('../db');

const Profile = sequelize.define('Profile', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, 
  },
  bio: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: new DataTypes.DATE(),
    allowNull: false,
    defaultValue: Sequelize.fn("now"),
  },
  updated_at: {
    type: new DataTypes.DATE(),
    allowNull: false,
    defaultValue: Sequelize.fn("now"),
  },
},
{
    timestamps: true, 
  });

module.exports = Profile;