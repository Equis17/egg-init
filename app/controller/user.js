'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 用户管理
 * */
class UserController extends Controller {
  /**
   * @summary createUser
   * @description createUser
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse createSuccess
   *  */
  async create() {
    const { ctx, service } = this;
    ctx.validate(ctx.rule.createUserRequest);
    const payload = ctx.request.body || {};
    const res = await service.user.create(payload);
    ctx.helper.success({ ctx, res });
  }
  async getAll() {
    const { ctx, service } = this;
    ctx.body = await service.user.getAll();
  }
}

module.exports = UserController;
