import { Schema, Model, model, Document } from 'mongoose'

export interface UserDocument extends Document {
  username: string;
  password: string;
  age: number;
  sex: number;
}

const UserSchma: Schema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: false },
  sex: { type: Number, required: true, default: 0, enum: [0, 1, 2] },
}, { timestamps: true })

export const UserModel: Model<UserDocument> = model<UserDocument>('User', UserSchma)