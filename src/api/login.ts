import service from "@/utils/service";

export function login(username: string, password: string) {
  return service({
    url: "/user/login",
    method: "post",
    data: {
      username,
      password
    }
  });
}

export function getInfo(token: string) {
  return service({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return service({
    url: "/user/logout",
    method: "post"
  });
}
