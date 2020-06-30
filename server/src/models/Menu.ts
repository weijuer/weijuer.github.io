import { Schema, Model, model, Document } from 'mongoose'

export interface MenuDocument extends Document {
  id?: number
  pid: number
  title: string
  component: string
  url: string
  type: number
  lastModified?: string
  createTime?: string
}

const MenuSchma: Schema = new Schema({
  id: Number,
  pid: { type: Number, required: true },
  title: { type: String, required: true },
  component: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: Number, default: 1 },
  lastModified: { type: Date, default: Date.now },
  createTime: { type: Date, default: Date.now },
})

export const MenuModel: Model<MenuDocument> = model<MenuDocument>('Menu', MenuSchma)
