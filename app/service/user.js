'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  async create(payload) {
    const { ctx } = this;
    payload.password = await ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  async getAll() {
    return this.ctx.model.User.find();
  }

  async find() {
  }

  async findByMobile(mobile) {
    const { ctx } = this;
    return ctx.model.User.find(mobile);
  }
}

module.exports = UserService;
