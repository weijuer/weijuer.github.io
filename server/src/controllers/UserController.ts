import { JsonController, Get, Post, Param, Delete, Body } from 'routing-controllers'
import { Inject } from 'typedi'
import { UserService } from '../services/UserService'
import { UserDocument } from '../models/User'

@JsonController('/users')
export class UserController {
  @Inject()
  userService: UserService

  @Get('/queryUsers')
  all() {
    return this.userService.findAll()
  }

  @Get('/:username')
  one(@Param('username') username: string) {
    return this.userService.findOne(username)
  }

  @Post('/')
  save(@Body() user: UserDocument) {
    return this.userService.save(user)
  }

  @Delete('/:username')
  delete(@Param('username') username: string) {
    return this.userService.remove(username)
  }
}
