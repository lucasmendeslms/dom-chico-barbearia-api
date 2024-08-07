import { Barbershop } from '../entities/barbershop.entity';
import { BarbershopServices } from '../entities/barbershopService';

export abstract class BarbershopRepository {
  abstract create(barbershopData: Barbershop): Promise<void>;
  abstract findBarbershopById(id: number): Promise<Barbershop>;
  abstract findBarbershopsInCity(cityId: number): Promise<Barbershop[]>;
  abstract findAllBarbershopServices(
    barbershopId: number,
  ): Promise<BarbershopServices[]>;
  abstract findBarbershopServiceById(id: number): Promise<BarbershopServices>;
}
