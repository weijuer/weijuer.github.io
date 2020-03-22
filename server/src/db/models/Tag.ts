import { Schema, Model, model, Document } from 'mongoose'

export interface TagDocument extends Document {
  id?: number;
  name: string
  createTime?: string;
}

const TagSchma: Schema = new Schema({
  id: Number,
  name: { type: String, required: true },
  createTime: { type: Date, default: Date.now }
})

export const TagModel: Model<TagDocument> = model<TagDocument>('Tag', TagSchma)