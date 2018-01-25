const userName = [
  {
    name: '测试用户名0'
  }, {
    name: '测试用户名1'
  }
]
// 输出待添加的路由信息对象
// 每个对象中可设置三个属性:url、type、response（不设置的话均做了默认处理）
module.exports = {
  users: {
    response: (req, res) => {
      res.json(userName)
    }
  },
  reg: {
    type: 'post',
    response: (req, res) => {
      res.json('reg')
    }
  }
}
