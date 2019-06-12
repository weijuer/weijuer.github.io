import service from "@/utils/service";

/**
 * 豆瓣电影API接口
 */
const douban = {
  get_movie_top250() {
    return service({
      url: "/douban/movie/top250",
      method: "get"
    });
  }
};

export default douban;
