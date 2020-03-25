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
  config.middleware = [
    'errorHandler',
  ];

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'myApiDocs',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: [ 'http', 'https' ],
    consumes: [ 'application/json' ],
    produces: [ 'application/json' ],
    enableSecurity: false,
    routerMap: true,
    enable: true,
  };
  config.mongoose = {
    client: {
      url: 'mongodb://101.132.159.200:27017/egg',
      options: {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        bufferMaxEntries: 0,
        auth: {
          user: 'eggAdmin',
          password: '123456',
        },
      },
    },
  };
  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional
  };
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
