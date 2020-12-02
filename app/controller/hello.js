'use strict';

const Controller = require('egg').Controller;

class HelloController extends Controller {
  async say() {
    // const { ctx } = this;
    this.ctx.body = 'hello world!';
  }
}

module.exports = HelloController;
