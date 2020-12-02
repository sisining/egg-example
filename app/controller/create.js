'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class CreateController extends Controller {
  async createOne() {
// 添加数据
    // 添加了一个name:5545,age:33的数据
      const { name,age } = this.ctx.request.body;//Post
      const result = await sequelize.query('INSERT INTO test1 (name,age)values(:name,:age)', {
        replacements: {
         name,age
        },
        type: sequelize.QueryTypes.INSERT
      });

    console.log(result);
    this.ctx.body = result;

  }
}

module.exports = CreateController;
