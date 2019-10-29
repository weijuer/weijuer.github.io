import Cookies from "js-cookie";

const navigator: any = window.navigator;

// userAgent
const userAgent = navigator.userAgent;
// 浏览器语言
const navigatorLang = (navigator.language || navigator.browserLanguage)
  .toLowerCase()
  .substr(0, 2);

/**
 * 浏览器信息
 */
const navi = {
  navigator: {
    // 是否手机
    isMobile: !!userAgent.match(/Mobile.*/),

    // 是否安卓
    isAndroid:
      (userAgent.match(/Android|Linux/i) &&
        userAgent.indexOf("Android") > -1) ||
      userAgent.indexOf("Linux") > -1,

    // 是否ios
    isIOS:
      userAgent.match(/(iPhone|iPod|iPad);?/i) &&
      !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

    // 是否微信客户端
    isWeixin:
      userAgent.match(/MicroMessenger/i) &&
      userAgent.indexOf("MicroMessenger") > -1,

    // 是否QQ浏览器
    isQQBrowser:
      userAgent.match(/MQQBrowser/i) && userAgent.indexOf("MQQBrowser") > -1,

    // 是否QQ
    isQQ: userAgent.match(/\bQQ\b/i) && userAgent.indexOf("\bQQ\b") > -1,

    // 是否是微博
    isWeiBo: userAgent.match(/WeiBo/i) && userAgent.indexOf("WeiBo") > -1
  },
  /**
   * 获取浏览器语言
   * @returns {string}
   */
  getLang: (): string => {
    // 浏览器语言
    return Cookies.get("userLanguage") || navigatorLang;
  },
  /**
   * 获取浏览器信息，navigator:PC/android/iOS, appType: QQ/Weixin/WeiBo...
   */
  getDevice: (): StoreState.Device => {
    // 返回设备信息
    let device = {
      type: "pc",
      appType: "",
      language: navi.getLang()
    };

    // 是否手机
    if (navi.navigator.isMobile) {
      // 1.浏览器类型navigator
      if (navi.navigator.isAndroid) {
        device.type = "android";
      } else if (navi.navigator.isIOS) {
        device.type = "iOS";
      }

      // 2.应用类型appType
      if (navi.navigator.isQQ) {
        device.appType = "QQ";
      } else if (navi.navigator.isWeixin) {
        device.appType = "Weixin";
      }
    }

    return device;
  },
  /**
   * 返回当前域名
   * @returns {string}
   */
  getDomain: (): string => {
    return `${window.location.protocol}//${window.location.host}`;
  }
};

export default navi;
