import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(userData: User): Promise<User>;
  abstract findByGoogleAccount(id: string): Promise<User>;
  abstract findById(id: number): Promise<User>;
}
