'use strict';
const devServerConf = require('./server.dev.conf');
const prodServerConf = require('./server.prod.conf');
module.exports = {
  dev: devServerConf,
  prod: prodServerConf
};
