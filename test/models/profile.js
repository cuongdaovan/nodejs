'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    position: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    Profile.hasOne(models.User, {
      foreignKey: 'id',
    });
  };
  return Profile;
};