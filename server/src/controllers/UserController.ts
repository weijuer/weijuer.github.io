import { JsonController, Get, Post, Param, Delete, Body } from "routing-controllers";
import { Service } from "typedi";
import { UserDocument, UserModel } from '../models/User'

@Service()
@JsonController("/users")
export class PostController {

    @Get("/queryUsers")
    all() {
        // lean不转换成Document
        return UserModel.find({}).lean();
    }

    @Get("/:name")
    one(@Param("name") username: string) {
        return UserModel.findOne({ username: username });
    }

    @Post("/")
    post(@Body() person: UserDocument) {
        const userModel = new UserModel({ ...person })
        return userModel.save()
    }

    @Delete("/:name")
    delete(@Param("name") username: string) {
        return UserModel.remove({ username: username });
    }
}