import db from "@/db/weijuer.db";
import service from "@/utils/service";

let music_api: string;

if (process.env.NODE_ENV === "production") {
  music_api = `https://api.apiopen.top`;
} else {
  music_api = "/api";
}

/**
 * 处理music对象增加索引
 * @param musics
 */
const processMusic = (musics: any) => {
  musics.map((item: any, index: number) => {
    item.lastModified = new Date().getTime() + index;
  });
  return musics;
};

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
    // 处理数据
    let musics = processMusic(res.result);
    // 存入本地缓存
    await bulk_add_music(musics);
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
 * 根据title获取musics
 * @param title
 */
export const get_musics_by_title = (title: string) => {
  return db
    .table("music")
    .where("title")
    .startsWithIgnoreCase(title)
    .sortBy("lastModified");
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
