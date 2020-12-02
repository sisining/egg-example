'use strict';
const { Sequelize } = require('sequelize');
// const mysql=require('mysql2');
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool:{
    max:10,
    min:0,
    idle:10000
  }
});

async function f() {
//测试连接是否成功
  try {
    await sequelize.authenticate();
    console.log('数据库连接成功...');
  } catch (error) {
    console.error('无法连接到数据库:', error);
  }
}
f();


module.exports=sequelize;
