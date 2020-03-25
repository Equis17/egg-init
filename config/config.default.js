/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585106764896_4501';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    sequelize: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'myEgg',
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
