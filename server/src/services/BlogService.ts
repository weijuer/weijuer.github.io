import { Service } from 'typedi'
import { BlogModel } from '../models/Blog'

@Service()
export class BlogService {
  findAll() {
    return BlogModel.find().lean()
  }

  findOne(id: string) {
    return BlogModel.findById(id)
  }

  async findByPage(query: any = {}, offset: number = 1, limit: number = 10) {
    const totalCount = await BlogModel.count(query)
    const data = await BlogModel.find(query).skip(offset).limit(limit).lean()
    return {
      data,
      totalCount,
      pageSize: limit,
    }
  }

  save(blog: any) {
    const model = new BlogModel({ ...blog })
    return model.save()
  }

  update(blog: any) {
    return BlogModel.updateOne({ _id: blog.id }, blog)
  }

  bulk(blogs: any[]) {
    return BlogModel.collection.insertMany(blogs)
  }

  remove(id: string) {
    return BlogModel.remove({ _id: id })
  }
}
