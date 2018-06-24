import axios from 'axios'

export const fun = ({ commit }) => {
  // 1.2 获取后台模拟数据
  axios.post('/api/demo', {})
    .then((response) => {
      let res = response.data
      commit({
        type:'getMsg', // 这个type很重要，vue会自动去找mutations.js中名为getMsg的方法
        res, // 成功后把得到的数据通过commit传入mutations
      });
    });
};
