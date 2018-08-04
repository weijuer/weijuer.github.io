'use strict';
import { join } from 'path';

const config = {
  env: 'development',
  mongodb: {
    url: 'mongodb://127.0.0.1/weijuer'
  },
  user: {
    username: 'weijuer',
    password: 'nj123456'
  },
  allowOrigins: ["http://localhost:9102", "http://192.168.10.42:9102", "http://localhost:63342", "http://localhost:8080", "http://localhost:9020"],
  port: 3000,
  uploadDir: join(__dirname, '../../uploads'),
  fileDir: join(__dirname, '../../files'),
  logDir: join(__dirname, '../../logs'),
  logLevel: 'info',
  poolSize: 200,
  apiTimeout: 60000
};

export default config;