import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
// import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  // @Post('user')
  // async createUser(
  //   @Body() userData: { email: string; firstName: string },
  // ): Promise<unknown> {
  //   return this.userService.createUser(userData);
  // }

  // @Get('user/:id')
  // async getPostById(@Param('id') id: string): Promise<unknown> {
  //   const user = await this.userService.user({ email: id });
  //   return user
  // }

  @Get('demo')
  async demo() {
    const user = await this.userService.createUser({
      email: '123',
      firstName: 'Hi, ',
      lastName: 'you'
    });
    console.log(user ,'<<<wait for Prisma\s reply')
    return {
      msg: 'hi'
    }
  }
}
