import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './repositories/userRepository';
import { PrismaUserRepository } from './repositories/prisma/prismaUserRepository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class UserModule {}
