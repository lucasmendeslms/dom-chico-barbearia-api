import { Barber } from '../entities/barber.entity';

export abstract class BarberRepository {
  abstract findBarbersByService(
    barbershopId: number,
    serviceId: number,
  ): Promise<Barber[]>;
  abstract findBarberById(id: number): Promise<Barber>;
}
