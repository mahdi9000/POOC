'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    static associate(models) {
      Meme.belongsTo(models.User, {foreignKey: 'UserId'})
      Meme.hasMany(models.Like, {foreignKey: 'MemeId'})
    }
  };
  Meme.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'title is required.'
        },
        notNull: {
          args: true,
          msg: 'title is required'
        },
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'field is required.'
        },
        notNull: {
          args: true,
          msg: 'field is required'
        },
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'url required.'
        },
        notNull: {
          args: true,
          msg: 'url required'
        },
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};