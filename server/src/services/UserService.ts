import { Service } from 'typedi'
import { ArticleModel } from '../models/Article'

@Service()
export class ArticleService {
  findAll() {
    return ArticleModel.find().lean()
  }

  findOne(id: string) {
    return ArticleModel.findById(id)
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
