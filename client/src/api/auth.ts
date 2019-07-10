import service from "@/utils/service";
const API_BASE = process.env.VUE_APP_URL;

/**
 * 从server-sso登出
 */
export const logout = (data: any) => {
  return service({
    url: API_BASE + "/server-sso/cas/logOutNotJump",
    method: "post",
    data
  });
};

/**
 * 从server-sso获取登录User
 */
export const get_auth_user = () => {
  return service({
    url: API_BASE + "/server-sso/cas/getName",
    method: "get"
  });
};
