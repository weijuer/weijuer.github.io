import { JsonController, Get, Post as HttpPost, Param, Delete, Body } from "routing-controllers";
import { Service } from "typedi";
import { UserDocument, UserModel } from '../models/User'

@Service()
@JsonController("/users")
export class PostController {

    @Get("/")
    all() {
        // lean不转换成Document
        return UserModel.find({}).lean();
    }

    @Get("/:name")
    one(@Param("name") name: string) {
        return UserModel.findOne({ name: name });
    }

    @HttpPost("/")
    post(@Body() person: UserDocument) {
        const userModel = new UserModel({ ...person })
        return userModel.save()
    }

    @Delete("/:name")
    delete(@Param("name") name: string) {
        return UserModel.remove({ name: name });
    }
}