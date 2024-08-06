import { Barbershop } from '../entities/barbershop.entity';

export abstract class BarbershopRepository {
  abstract create(barbershopData: Barbershop): Promise<void>;
  abstract findBarbershopById(id: number): Promise<Barbershop>;
  abstract findBarbershopsInCity(cityId: number): Promise<Barbershop[]>;
}
