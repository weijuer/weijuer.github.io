import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  isPageScroll: (state: any) => state.isPageScroll,
  isScrollUp: (state: any) => state.isScrollUp,
  isLoading: (state: any) => state.isLoading,
  isSidebarActive: (state: any) => state.isSidebarActive,
  language: (state: any) => state.language,
  device: (state: any) => state.device,
  isLogin: (state: any) => state.isLogin,
  user: (state: any) => state.user,
  token: (state: any) => state.token,
  domain: (state: any) => state.domain
};

export default getters;
