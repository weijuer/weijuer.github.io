export default class WError {
  constructor({ code = 999, message = '未知错误' } = { code: 999, message: '未知错误' }) {
    this.code = code;
    this.message = message;
  }
}
