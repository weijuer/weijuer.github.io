/**
 * Created by qianqing on 2017/01/27.
 */
'use strict';
const oss = require('./oss.conf');
const wx = require('./wx.conf');
const api = require('./api.conf');
const config = {
  oss, wx, api
};

module.exports = config;
