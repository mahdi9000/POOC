'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
          msg: 'Title is required'
        },
        notNull: {
          args: true,
          msg: 'Title is required'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Categery is required'
        },
        notNull: {
          args: true,
          msg: 'Categery is required'
        }
      }
    },
    meme_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `It's not dank memes if it does not contain picture, it's a "quotes"`
        },
        notNull: {
          args: true,
          msg: `It's not dank memes if it does not contain picture, it's a "quotes"`
        },
        isUrl: {
          args: true,
          msg: 'Image must be a URL format, you can find the on 9GAG or etc'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};