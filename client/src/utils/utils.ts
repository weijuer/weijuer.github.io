/**
 * 函数防抖 (只执行最后一次点击)
 */
export const Debounce = (fn: Function, t: number) => {
  let delay = t || 500;
  let timer: any;
  return function() {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(null, args);
    }, delay);
  };
};

/*
 * 函数节流 (在n秒内点击多次，只有一次生效)
 */
export const Throttle = (fn: Function, t: number) => {
  let last: number;
  let timer: number;
  let interval = t || 500;
  return function() {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(null, args);
      }, interval);
    } else {
      last = now;
      fn.apply(null, args);
    }
  };
};
