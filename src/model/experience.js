const { DataTypes,Sequelize } = require('sequelize');
const sequelize = require('../db');

const Experience = sequelize.define('Experience', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  jobTitle: {
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

module.exports = Experience;
