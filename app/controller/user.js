'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.dir(ctx);
    ctx.body = {
      ip: ctx.request.ip,
      message: ctx.request.header['user-agent'],
    };
  }
}

module.exports = UserController;
