import service from 'Utils/service'

const base_url = '/api'

/**
 * 获取全部文章列表
 */
export function get_articles() {
  return service({
    url: `${base_url}/v1/articles`,
    method: 'get'
  })
}

/**
 * 分页获取文章列表
 * @param {*} data
 */
export function get_articles_by_page(data) {
  return service({
    url: `${base_url}/v1/articles`,
    method: 'POST',
    data
  })
}

/**
 * 获取单条文章详情
 * @param {*} params GET请求参数对象
 */
export function get_article(params) {
  return service({
    url: `${base_url}/v1/article`,
    method: 'get',
    params
  })
}
