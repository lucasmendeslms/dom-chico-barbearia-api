import { Decimal } from '@prisma/client/runtime/library';

export interface BarbershopServices {
  id?: number;
  name: string;
  price: Decimal;
  duration: string;
  barbershopId: number;
}
