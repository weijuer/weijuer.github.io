'use strict';
import {join} from 'path';

const config = {
  env: 'development',
  port: 3000,
  mongodb: {
    url: 'mongodb://127.0.0.1:27017/weijuer',
    options: {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000
    }
  },
  log4js: {
    configure: {
      appenders: {
        ruleConsole: {type: 'console'},
        ruleFile: {
          type: 'dateFile',
          filename: 'server/logs/server-',
          pattern: 'yyyy-MM-dd.log',
          maxLogSize: 10 * 1000 * 1000,
          numBackups: 3,
          alwaysIncludePattern: true
        }
      },
      categories: {
        default: {appenders: ['ruleConsole', 'ruleFile'], level: 'info'}
      }
    }
  },
  allowOrigins: ["http://localhost:9102", "http://192.168.10.42:9102", "http://localhost:63342", "http://localhost:8080", "http://localhost:9020"],
  uploadDir: join(__dirname, '../../uploads')
};

module.exports = config;
