import { IsString } from 'class-validator';
import { UserType } from '@prisma/client';

export class UserDto {
  @IsString()
  googleAccountId: string;

  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  type?: UserType;

  @IsString()
  picture: string;
}
