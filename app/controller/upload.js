'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const download = require('image-downloader');

/**
 * @Controller 上传
 * */
class UploadController extends Controller {
  /**
   * @summary 上传单个文件
   * @description 上传单个文件
   * @router post /api/upload/single
   * */
  async create() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = path.basename(stream.filename);
    const extname = path.extname(filename).
      toLowerCase();
    const uuid = (Math.random() * 999999).toFixed();
    const target = path.join(this.config.baseDir, 'app/public/uploads', `${uuid}${extname}`);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }
    ctx.helper.success({ ctx });
  }
}

module.exports = UploadController;
