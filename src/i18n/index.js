import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// 定义默认语言及语言包路径
const i18n = new VueI18n({
    // 语言标识
    locale: 'zh-CN', 
    // 语言包
    messages: {
        // 中文语言包
        'zh-CN': require('./messages/zh-CN'), 
        // 英文语言包
        'en-US': require('./messages/en-US') 
    }
});

export default i18n;