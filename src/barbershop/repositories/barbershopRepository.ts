import { Barbershop } from '../entities/barbershop.entity';

export abstract class BarbershopRepository {
  abstract create(barbershopData: Barbershop): Promise<void>;
}
