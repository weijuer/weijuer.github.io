import { Schema, Model, model, Document } from 'mongoose'

export interface UserDocument extends Document {
  name: string;
  age: number;
  sex: number;
  createTime?: string;
}

const UserSchma: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: Number, required: true, default: 0, enum: [0, 1, 2] },
  createTime: { type: Date, default: Date.now }
})

export const UserModel: Model<UserDocument> = model<UserDocument>('User', UserSchma)