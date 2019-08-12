import navi from "@/utils/navi";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

interface State {
  scroll: {
    lastPosition: number;
    newPosition: number;
  };
  isPageScroll: boolean;
  isScrollUp: boolean;
  isLoading: boolean;
  language: string;
  device: any;
  isLogin: boolean;
  user: null;
  token: null;
  domain: string;
}

const state: State = {
  scroll: {
    lastPosition: 0,
    newPosition: 0
  },
  isPageScroll: false,
  isScrollUp: false,
  isLoading: false,
  language: "zh",
  device: null,
  isLogin: false,
  user: null,
  token: null,
  domain: navi.getDomain()
};

export default {
  state,
  actions,
  getters,
  mutations
};
