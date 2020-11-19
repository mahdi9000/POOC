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
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    image_url: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};