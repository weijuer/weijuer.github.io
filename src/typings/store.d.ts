declare namespace StoreState {
  export interface State {
    scroll: {
      lastPosition: number;
      newPosition: number;
    };
    isPageScroll: boolean;
    isScrollUp: boolean;
    isLoading: boolean;
  }

  // 浏览器设备信息
  export interface Device {
    // 浏览器信息 pc/mobile/andriod/iOS
    type: string;
    // 应用类型： QQ/Weixin
    appType: string;
    // 浏览器语言
    language: string;
  }
}
