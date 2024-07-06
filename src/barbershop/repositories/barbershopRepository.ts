import { Barbershop } from '../entities/barbershop.entity';

export abstract class BarbershopRepository {
  abstract create(barbershopData: Barbershop): Promise<void>;
  abstract findOne(id: number): Promise<Barbershop>;
}
