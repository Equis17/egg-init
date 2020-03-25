'use strict';
const moment = require('moment');

module.exports = {
  formatTime: time => moment(time).format('YYYY-MM-DD HH:mm:ss'),
  success: ({ ctx, res = null, msg = 'success' }) => {
    ctx.body = {
      code: 0,
      msg,
      data: res,
    };
    ctx.status = 200;
  },
};
