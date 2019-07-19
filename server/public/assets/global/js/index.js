// Login
var Index = new Vue({
  el: '#index',
  data: {
    message: ''
  },
  computed: {
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initSocket();
    },
    initSocket() {
      let socket = io('http://localhost:3000');

      let interval = setInterval(() => {
        socket.emit('isUpdate', (new Date().getTime()));
      }, 1000);

      // 有更新
      socket.on('update', (message) => {
        console.log('has messages: ' + message);
      });

      // 断开连接
      socket.on('disconnect', () => {
        console.log('disconnected !');
        clearInterval(interval);
      });
    }
  }
});