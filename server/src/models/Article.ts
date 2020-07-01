import { Schema, Model, model, Document } from 'mongoose'
import { TagDocument } from './Tag'

export interface ArticleDocument extends Document {
  id?: number
  title: string
  author: string
  url: string
  portrait?: string
  description: string
  tags?: TagDocument[]
  lastModified?: string
  createTime?: string
}

const ArticleSchma: Schema = new Schema({
  id: Number,
  title: { type: String, required: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  portrait: { type: String },
  description: { type: String, required: true },
  tags: { type: Array, default: [] },
  lastModified: { type: Date, default: Date.now },
  createTime: { type: Date, default: Date.now },
})

ArticleSchma.pre('save', (next) => {
  if (this.isNew) {
    this.createTime = this.lastModified = Date.now()
  } else {
    this.lastModified = Date.now()
  }
  next()
})

export const ArticleModel: Model<ArticleDocument> = model<ArticleDocument>('Article', ArticleSchma)
