import {get_auth_user, logout} from "../../api/auth"

const app = {
    namespaced: true,

    state: {
        sidebar: {
            opened: !+localStorage.getItem('sidebarStatus'),
            withoutAnimation: false
        },
        device: 'desktop',
        message: '', // 初始值为空
        delay: 0,
        // 页面是否滚动
        isPageScroll: false, 
        // 侧边栏是否展开
        isSideMenuActive: false, 
        // 是否往上滚动
        isScrollUp: true,
        // 滚动
        scroll: {
            newPosition: 0,
            lastPosition: 0,
        },
        // document
        document: {
            hidden: false
        }
    },
    mutations: {
        /**
         * 页面滚动事件
         * @param state
         */
        PAGE_ON_SCROLL (state) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 上次滚动距离
            state.scroll.lastPosition = window.scrollY;
            // 页面发生滚动
            state.isPageScroll = scrollTop > 0;
            // 页面向上滚动
            state.isScrollUp = state.scroll.lastPosition < state.scroll.newPosition
            // 最新滚动距离
            state.scroll.newPosition = state.scroll.lastPosition;
        },
        /**
         * 页面滚动事件
         * @param state
         */
        PAGE_ON_MOUSEWHEEL (state, event) {
            // 滚动数值 IE/Opera/Chrome || Firefox
            let deltaY = event.deltaY || event.wheelDelta || event.detail;
            // 页面向上滚动
            state.isScrollUp = deltaY < 0;
        },
        SIDE_MENU_ACTIVE (state) {
            state.isSideMenuActive = !state.isSideMenuActive;
        },
        TOGGLE_SIDEBAR (state) {
            if (state.sidebar.opened) {
                localStorage.setItem('sidebarStatus', 1)
            } else {
                localStorage.setItem('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
        },
        CLOSE_SIDEBAR (state, withoutAnimation)  {
            localStorage.setItem('sidebarStatus', 1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE (state, device)  {
            state.device = device
        },
        /**
         * 切换语言
         * @param state
         * @param lang
         */
        CHANGE_LANGUAGE(state, lang) {
            state.language = lang;
        },
        /**
         * 切换窗口标签状态
         * @param {*} state 
         * @param {*} hidden 
         */
        TOGGLE_HIDDEN(state, hidden) {
            state.document.hidden = !state.document.hidden;
        }
    },
    actions: {
        /**
         * 回到顶部
         * @param dispatch 分发action
         * @param state
         */
        BACK_TO_TOP ({ dispatch, state }) {
            // 1.scrollBy方法
            window.scrollBy(0, -30);
            // 2.定时滚动
            window.requestAnimationFrame(() => {
                if (state.isPageScroll) {
                    dispatch('BACK_TO_TOP');
                }
            });
        },
        ToggleSideBar ({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        CloseSideBar ({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        ToggleDevice ({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        },
        /**
         * 获取登录用户信息
         * @param commit
         * @param state
         * @returns {Promise<void>}
         * @constructor
         */
        async GET_USER ({commit, state}) {
            try {
                // 调用获取登录用户信息接口
                let res = await get_auth_user();
                // 结果处理
                if (res.success) {
                    // 处理数据
                    commit('GET_USER', res.data);
                }
            } catch (err) {
                console.error(err);
            }
        },
        /**
         * 登出
         * @param commit
         * @param state
         * @returns {Promise<void>}
         * @constructor
         */
        async LOGOUT ({commit, state}) {
            try {
                // 获取当前登录用户
                let user = state.user;

                // 调用server-sso登出接口
                await logout({
                    userId: user.userId
                });

                // 结果处理
                commit('LOGOUT');
            } catch (err) {
                console.error(err);
            }
        },
        /**
         * 手动切换语言
         * @param context
         * @param lang
         * @constructor
         */
        CHANGE_LANGUAGE({commit, state}, lang) {
            // 1.切换i18n.locale语言为lang
            i18n.locale = lang;
            mI18n.locale = lang;
            // 2.本地存储用户切换语言
            localStorage.setItem('userLang', lang);
            // 3.更改语言状态
            commit('CHANGE_LANGUAGE', lang);
        },
        /**
         * 窗口状态切换
         * @param commit
         * @param state
         */
        TOGGLE_HIDDEN({commit, state}) {
            let isHidden = document.hidden || document.webkitHidden || document.msHidden; 
            if (isHidden) { 
                // 动画视频暂停
                commit('TOGGLE_HIDDEN', true);
                document.title = '出bug了';
            } else { 
                // 动画视频开始 
                commit('TOGGLE_HIDDEN', false);
                document.title = `Weijuer's Blog`;
            } 
        }
    },
    getters: {
        isScrollUp: state => state.isScrollUp,
        isPageScroll: state => state.isPageScroll,
        isSideMenuActive: state => state.isSideMenuActive,
    }
}

export default app