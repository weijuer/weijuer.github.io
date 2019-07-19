const Koa = require('koa');
const IO = require('koa-socket-2');

const app = new Koa();
const io = new IO();

io.attach(app);

io.on('connection', ({socket}, data) => {
  socket.on('isUpdate', (value) => {
    console.log(value);
    
    setTimeout(() => {
      socket.emit('update', 'You has new Blogs!');
    }, 10000);
  });
});

module.exports = app;