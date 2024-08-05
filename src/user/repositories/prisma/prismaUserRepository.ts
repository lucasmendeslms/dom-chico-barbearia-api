import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { UserRepository } from '../userRepository';

import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByGoogleAccount(id: string): Promise<User> {
    const userData: User = await this.prisma.user.findUnique({
      where: {
        googleAccountId: id,
      },
    });

    return userData;
  }

  async create(userData: User): Promise<User> {
    const user: User = await this.prisma.user.create({
      data: userData,
    });
    return user;
  }

  async findById(id: number): Promise<User> {
    const userData: User = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return userData;
  }
}
