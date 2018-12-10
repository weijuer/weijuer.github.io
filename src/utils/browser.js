// userAgent
const userAgent = navigator.userAgent;
// 浏览器语言
const navigatorLang = (navigator.language || navigator.browserLanguage).toLowerCase().substr(0, 2);

/**
 * 浏览器信息
 * @type {{navigator: {isMobile: boolean, isAndroid: RegExpMatchArray | boolean, isIOS: RegExpMatchArray | boolean, isWeixin: RegExpMatchArray | boolean}, getLang: (function(): string), getDevice: (function(): string), getDomain: (function(): string)}}
 */
const browser = {
    navigator: {
        // 是否手机
        isMobile: !!userAgent.match(/AppleWebKit.*Mobile.*/),

        // 是否安卓
        isAndroid: userAgent.match(/Android|Linux/i) && userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1,

        // 是否ios
        isIOS: userAgent.match(/(iPhone|iPod|iPad);?/i) && !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

        // 是否微信客户端
        isWeixin: userAgent.match( /MicroMessenger/i ) && userAgent.indexOf('MicroMessenger') > -1,

        // 是否QQ浏览器
        isQQ: userAgent.match( /MQQBrowser/i ) && userAgent.indexOf("MQQBrowser") > -1,

        // 是否是微博
        isWeiBo: userAgent.match( /WeiBo/i ) && userAgent.indexOf("WeiBo") > -1
    },
    /**
     * 获取浏览器语言
     * @returns {string}
     */
    getLang: () => {
        // 浏览器语言
        const navigatorLang = (navigator.language || navigator.browserLanguage).toLowerCase().substr(0, 2);
        return localStorage.getItem('userLang') || navigatorLang;
    },
    /**
     * 获取浏览器信息，navigator:PC/android/iOS, appType: QQ/Weixin/WeiBo...
     * @returns {{navigator: string, appType: string}}
     */
    getDevice: () => {
        // 返回设备信息
        let device = {
            navigator: 'pc',
            appType: '',
            language: localStorage.getItem('userLang') || navigatorLang
        };

        // 是否手机
        if (browser.navigator.isMobile) {
            // 1.浏览器类型navigator
            if(browser.navigator.isAndroid) {
                device.navigator = 'android';
            } else if (browser.navigator.isIOS) {
                device.navigator = 'iOS';
            }

            // 2.应用类型appType
            if(browser.navigator.isQQ) {
                device.appType = 'QQ';
            } else if(browser.navigator.isWeixin) {
                device.appType = 'Weixin';
            }
        } else {
            device.navigator = 'pc';
        }

        return device;
    },
    /**
     * 返回当前域名
     * @returns {string}
     */
    getDomain: () => {
        return `${window.location.protocol}//${window.location.host}`;
    }
};

export default browser