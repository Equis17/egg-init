'use strict';

const Service = require('egg').Service;

class UserAccessService extends Service {

  async login(payload) {
    const { ctx, service } = this;
    // TODO 手机
    const user = await service.user.findByMobile(payload.mobile);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    const verifyPwd = await ctx.compare(payload.password, user.password);
    if (!verifyPwd) {
      ctx.throw(404, 'user password is error');
    }
    return { token: await service.actionToken.apply(user._id) };
  }
  // TODO 登出
  async logout() {
  }

  async current() {
    const { ctx, service } = this;
    const _id = ctx.state.user.data._id;
    // TODO 方法
    const user = await service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not fount');
    }
    user.password = '';
    return user;
  }
}

module.exports = UserAccessService;
