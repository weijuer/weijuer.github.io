import { Schema, Model, model, Document } from 'mongoose'

export interface BlogDocument extends Document {
  title: string
  author: string
  body: string
  comments: [{ body: string, date: string }]
  date: string
  hidden: boolean
  meta: {
    votes: number,
    favs: number
  }
}

const BlogSchma: Schema = new Schema({
  title: { type: String, unique: true, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  comments: [{ body: String, date: String }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

export const BlogModel: Model<BlogDocument> = model<BlogDocument>('Blog', BlogSchma)
