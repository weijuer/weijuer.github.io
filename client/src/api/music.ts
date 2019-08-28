import service from "@/utils/service";

let music_api: string;

if (process.env.NODE_ENV === "production") {
  music_api = `https://api.apiopen.top`;
} else {
  music_api = "/api";
}

/**
 * 音乐搜索接口
 * @param name
 */
export const search_music = (name: string) => {
  return service({
    url: `${music_api}/searchMusic?name=${name}`,
    method: "get"
  });
};

/**
 * 音乐详情接口
 * @param id
 */
export const get_music_detail = (id: string) => {
  return service({
    url: `${music_api}musicDetails?id=${name}`,
    method: "get"
  });
};
