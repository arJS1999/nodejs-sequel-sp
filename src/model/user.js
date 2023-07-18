const { DataTypes ,Sequelize} = require('sequelize');
const sequelize = require('../db');
const Profile = require('./profile.js');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
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
}, {
  timestamps: true, 
});

User.hasOne(Profile, {
  foreignKey: 'userId', 
  as: 'profile', 
});

module.exports = User;
