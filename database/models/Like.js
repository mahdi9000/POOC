'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.Meme, {foreignKey: 'MemeId'})
    }
  };
  Like.init({
    totalLikes: DataTypes.INTEGER,
    totalDislikes: DataTypes.INTEGER,
    MemeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};