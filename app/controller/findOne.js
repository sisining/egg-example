'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class QueryOneController extends Controller {
  async findOnly() {

    // 带参查询
    const { id } = this.ctx.query;
    const user = await sequelize.query('select * from test1 where id=:id', {
      replacements: { id },
      type: sequelize.QueryTypes.SELECT
    });

    console.log(user);
    this.ctx.body = user;
  }
}

module.exports = QueryOneController;
