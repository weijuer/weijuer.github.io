// Login
var Index = new Vue({
  el: '#index',
  data: {
    message: '',
    options: {
      url: '',
      target: '',
      item: null
    }
  },
  computed: {
  },
  mounted() {
    // this.init();
  },
  methods: {
    init() {
      this.initSocket();
    },
    scrapeArticles() {
      // 获取最新日志
      let url = '/scrapeArticles';
      let data = {options: this.options};

      fetch(url, {
        body: JSON.stringify(data),
        method: 'POST',
        credentials: 'include',
        mode: 'cors'
      })
        .then(response => response)
        .then(data => console.log('fetch data is', data))
        .catch(error => console.error('Error:', error));
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