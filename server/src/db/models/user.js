'use strict';
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%/?^\-]{8-64}$/;
const EMAIL_PATTERN = /^\w+@[a-zA-Z_\-]+?\.[a-zA-Z]{2,3}$/;
const {
  Model
} = require('sequelize');
/*module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};*/
module.exports = const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    is: EMAIL_PATTERN,

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    is: PASSWORD_PATTERN,
  }
}, {
  // Other model options go here
});