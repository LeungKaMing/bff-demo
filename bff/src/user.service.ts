import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<unknown> {
    // const temp = await this.prisma.user.findUnique({
    //   where: userWhereUniqueInput,
    // });
    // const temp = await this.prisma.user.findUnique({
    //   where: {
    //     email: 'alice@prisma.io',
    //   },
    // })
    // console.log(temp, '<<<<<<<')
    return {
      code: 200,
      data: {msg: 'hi'}
    }
  }
  
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    console.log(data, '<<<<固定入参')
    const temp = await this.prisma.user.create({
      data,
    });
    return temp
  }
}