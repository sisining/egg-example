'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    nickname: STRING(20),
  }, {
    timestamps: false,
  });
  return User;
};
