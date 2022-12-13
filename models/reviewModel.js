module.exports = (sequelize, DataTypes) => {
  return sequelize.define("review", {
    rating: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    }
  })
}