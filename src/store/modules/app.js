const app = {
    state: {
        sidebar: {
            opened: !+localStorage.getItem('sidebarStatus'),
            withoutAnimation: false
        },
        device: 'desktop',
        message: '', // 初始值为空
        delay: 0,
        isPageScroll: false, // 页面是否滚动
        isSideMenuActive: false // 侧边栏是否展开
    },
    mutations: {
        /**
         * 页面滚动事件
         * @param state
         */
        PAGE_ON_SCROLL: state => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let offsetTop = document.querySelector('.app-header').offsetTop;
            state.isPageScroll = scrollTop > offsetTop;
        },
        /**
         * 返回顶部
         */
        BACK_TO_TOP: state => {
            // 1.scrollBy方法
            window.scrollBy(0, -100);

            
        },
        SIDE_MENU_ACTIVE: state => {
            state.isSideMenuActive = !state.isSideMenuActive;
        },
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                localStorage.setItem('sidebarStatus', 1)
            } else {
                localStorage.setItem('sidebarStatus', 0)
            }
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            localStorage.setItem('sidebarStatus', 1)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        }
    },
    actions: {
        /**
         * 回到顶部
         * @param commit
         * @param state
         */
        BACK_TO_TOP: ({ commit, state }) => {
            // 2.定时滚动
            setTimeout(() => {
                if (state.isPageScroll) {
                    dispatch('BACK_TO_TOP');
                }
            }, 10);
        },
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        CloseSideBar({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        ToggleDevice({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        }
    },
    getters: {
        isPageScroll: state => state.isPageScroll,
        isSideMenuActive: state => state.isSideMenuActive,
    }
}

export default app