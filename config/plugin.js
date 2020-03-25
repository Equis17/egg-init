'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  swagger: {
    enable: true,
    package: 'egg-swagger-doc-feat',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
