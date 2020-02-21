import service from "@/utils/service";
import db from "@/db/weijuer.db";

let news_api: string;

if (process.env.NODE_ENV === "production") {
  // UC news api
  news_api = `https://iflow-api.uc.cn/feiyan/list`;
} else {
  news_api = "/news";
}

/**
 * 获取最新疫情信息
 */
function get_news() {
  const params = {
    trend: 1,
    iflow: 1,
    district: 1,
    uc_param_str: "pccplo"
  };
  return service({
    url: `${news_api}`,
    method: "get",
    params
  });
}

/**
 * 本地数据库疫情数据
 */
function get_local_news() {
  return db
    .table("news")
    .where({ type: "covid" })
    .first();
}

/**
 * 本地数据库疫情数据
 */
function set_local_news(news: any) {
  return db.table("news").put(news);
}

/**
 * 疫情数据接口
 */
export async function get_covid_news() {
  const localData: any = await get_local_news();
  console.log("local", localData);
  if (localData) {
    return localData;
  } else {
    const res: any = await get_news();

    // 结果处理
    if (res.code === 0) {
      let news = res.data;
      news.type = "covid";
      // 存入本地缓存
      await set_local_news(news);
      return news;
    }
  }
}
