const Router = require('koa-router');
const convert = require('koa-convert');
const requireDir = require('require-dir');
const routes = requireDir('./routes');

const api = () => {
  const router = new Router({
    prefix: '/api',
  });
  Object.keys(routes).forEach(name => {
    return routes[name]['default'](router);
  });
  return convert.compose([
    router.routes(),
    router.allowedMethods(),
  ]);
};

module.exports = api;
