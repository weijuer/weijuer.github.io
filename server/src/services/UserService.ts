import { Service } from 'typedi'
import { UserModel } from '../models/User'

@Service()
export class UserService {
  findAll() {
    // lean不转换成Document
    return UserModel.find().lean()
  }

  async findOne(username: string) {
    const res = await UserModel.findOne({ username }).lean()
    console.log(res)
    return JSON.stringify(res)
  }

  save(user: any) {
    let model = new UserModel({ ...user })
    console.log(model)
    return model.save()
  }

  update(user: any) {
    return UserModel.updateOne({ _id: user.id }, user)
  }

  bulk(users: any[]) {
    return UserModel.collection.insertMany(users)
  }

  remove(username: string) {
    return UserModel.remove({ username })
  }
}
