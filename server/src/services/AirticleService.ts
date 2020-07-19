import { Service } from 'typedi'
import { ArticleModel } from '../models/Article'

@Service()
export class ArticleService {
  findAll() {
    return ArticleModel.find().lean()
  }

  findOne(id: string) {
    return ArticleModel.findById(id).lean()
  }

  /**
   * 分页查询
   * @param {*} [query={}]
   * @param {number} [index=1]
   * @param {number} [pageSize=10]
   * @returns
   * @memberof ArticleService
   */
  async findByPage(query: any = {}, index: number = 1, pageSize: number = 10) {
    // 计算skip偏移量
    const offset = (index - 1) * pageSize
    // 总条数
    const totalCount = await ArticleModel.count(query)
    // 分页数据
    const data = await ArticleModel.find(query).skip(offset).limit(pageSize).lean()
    return {
      data,
      index,
      pageSize,
      totalCount,
    }
  }

  save(article: any) {
    let model = new ArticleModel({ ...article })
    return model.save()
  }

  update(article: any) {
    return ArticleModel.updateOne({ _id: article.id }, article)
  }

  bulk(articles: any[]) {
    return ArticleModel.collection.insertMany(articles)
  }

  remove(id: string) {
    return ArticleModel.remove({ _id: id })
  }
}
