'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class DeleteController extends Controller {
  async deleteOne() {
  //  删除
  //  删除了id=5的数据
    const {id} =this.ctx.query
    const result =await sequelize.query('delete from test1 where id:id',{
      replacements:{id},
      type:sequelize.QueryTypes.DELETE
    })

    console.log('删除了一个数据');
    this.ctx.body='删除了一个数据'

  }
}

module.exports = DeleteController;
