'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Meme, {foreignKey: 'UserId'})
    }
  };
  User.init({
    username:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required.'
        },
        notNull: {
          args: true,
          msg: 'Email is required'
        },
        len: {
          args: [5, 15],
          msg: 'Username length must be between 5-15 characters'
        }
      },
      unique: {
        args: 'username',
        msg: 'Username already taken!'
      }
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required.'
        },
        notNull: {
          args: true,
          msg: 'Password is required'
        },
        len: {
          args: [5, 15],
          msg: 'Password length must be between 5-15 characters'
        }
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password)
  })
  return User;
};