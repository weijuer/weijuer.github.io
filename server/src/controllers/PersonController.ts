import { JsonController, Get, Post as HttpPost, Param, Delete, Body } from "routing-controllers";
import { Service } from "typedi";
import { UserDocument, UserModel } from '../db/models/Person'

@Service()
@JsonController()
export class PostController {

    @Get("/persons")
    all() {
        // lean不转换成Document
        return UserModel.find({}).lean();
    }

    @Get("/persons/:name")
    one(@Param("name") name: string) {
        return UserModel.findOne({ name: name });
    }

    @HttpPost("/persons")
    post(@Body() person: UserDocument) {
        const userModel = new UserModel({ ...person })
        return userModel.save()
    }

    @Delete("/persons/:id")
    delete(@Param("id") id: string) {
        return UserModel.remove({ _id: id });
    }
}