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
 * 获取单条文章详情
 * @param {*} data
 */
export function get_article(data) {
  return service({
    url: `${base_url}/v1/articles`,
    method: 'get',
    data
  })
}
