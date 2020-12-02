'use strict';

const Controller = require('egg').Controller;
const sequelize = require('../service/test');

class QueryController extends Controller {
  async queryall() {
    // // 查询
    // const result = await sequelize.query('SELECT * FROM test1');
    // console.log(result);
    // this.ctx.body = result;
    //
    // // 带参查询
    // const { id } = this.ctx.query;
    // const user = await sequelize.query('select * from test1 where id=:id', {
    //   replacements: { id },
    //   type: sequelize.QueryTypes.SELECT
    // });

    // console.log(user);
    // this.ctx.body = user;

    // 添加数据
    // 添加了一个name:5545,age:33的数据
    const { name, age } = this.ctx.request.body;//Post
    const result = await sequelize.query('INSERT INTO test1 (name,age)values(:name,:age)', {
      replacements: {
        name, age
      },
      type: sequelize.QueryTypes.INSERT
    });

    console.log(result);
    this.ctx.body = result;

    try {
      // await sequelize.authenticate();
      console.log('成功...');
    } catch (error) {
      console.error(error);
    }

    //修改
    // 修改了name=6437的age为100
    // const {id, name } = this.ctx.request.body;
    // const result = await sequelize.query('update test1 set name=:name where id=:id', {
    //   replacements: {
    //     name,
    //     id
    //   },
    //   type: sequelize.QueryTypes.UPDATE
    // });
    // console.log(result);
    // this.ctx.body = result;

    //  删除
    //  删除了id=5的数据
    // const { id } = this.ctx.query;
    // const result = await sequelize.query('delete from test1 where id=:id', {
    //   replacements: { id },
    //   type: sequelize.QueryTypes.DELETE
    // });
    //
    // console.log('删除了一个数据');
    //
    // try {
    //   await sequelize.authenticate();
    //   console.log('成功...');
    // } catch (error) {
    //   console.error(error);
    // }
  }
}

module.exports = QueryController;
