'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class UpdateController extends Controller {
  async updateOne() {
    //修改
    //修改了name=6437的age为100
    const { age, name } = this.ctx.request.body;
    const result = await sequelize.query('update test1 set age:age where name:name', {
      replacements: {
        name,
        age
      },
      type: sequelize.QueryTypes.UPDATE
    });
    console.log(result);
    this.ctx.body = result;

  }
}

module.exports = UpdateController;
