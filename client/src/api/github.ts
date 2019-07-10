import service from "@/utils/service";

/**
 * 获取登录User信息
 */
export const get_user = (username: string) => {
  return service({
    url: `/github/users/${username}`,
    method: "get"
  });
};
