import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './repositories/userRepository';
import { User } from './entities/user.entity';
// import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(userData: User): Promise<User> {
    const isExistingUser: User | null =
      await this.userRepository.findByGoogleAccount(userData.googleAccountId);

    if (isExistingUser) {
      throw new ConflictException('User already exists');
    }

    const user: User = await this.userRepository.create(userData);
    return user;
  }

  async findByGoogleAccount(id: string): Promise<User> {
    const userData: User | null =
      await this.userRepository.findByGoogleAccount(id);

    if (!userData) {
      throw new NotFoundException('User not found by google account');
    }

    return userData;
  }

  async findById(id: number): Promise<User> {
    const userData: User = await this.userRepository.findById(id);

    if (!userData) {
      throw new NotFoundException('User not found');
    }

    return userData;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
