import { UserType } from '@prisma/client';

export interface User {
  id?: number;
  googleAccountId: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  type?: UserType;
  picture?: string;
}
