import db from "@/db/weijuer.db";
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
export const search_music = async (name: string) => {

  const res: any = await service({
    url: `${music_api}/searchMusic?name=${name}`,
    method: "get"
  });

  // 结果处理
  if (res.code === 200) {
    // 清空数据
    await clear_music();
    // 处理数据
    await bulk_add_music(res.result);
  }

  return res;
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

/**
 * 根据id获取music
 * @param id
 */
export const get_music = (id: number) => {
  return db.table("music").get(id);
};

/**
 * 清空music表
 */
export const clear_music = () => {
  return db.table("music").clear();
};

/**
 * 批量新增musics
 * @param musics
 */
export const bulk_add_music = (musics: W.IMusic[]) => {
  return db.table("music").bulkAdd(musics);
};
