import Vue from 'vue'
// 引入Vue-i18n国际化
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// 定义默认语言及语言包路径
const i18n = new VueI18n({
    // 语言标识
    locale: 'zh-CN', 
    // 语言包
    messages: {
        // 中文语言包
        'zh-CN': require('@/assets/global/i18n/app-zh-CN'), 
        // 英文语言包
        'en-US': require('@/assets/global/i18n/app-en-US') 
    }
});

export default i18n;