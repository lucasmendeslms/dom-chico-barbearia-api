import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BarbershopService } from 'src/barbershop/barbershop.service';
import { BarberRepository } from './repositories/barberRepository';
import { Barber } from './entities/barber.entity';

@Injectable()
export class BarberService {
  constructor(
    private barberRepository: BarberRepository,
    @Inject(forwardRef(() => BarbershopService))
    private barbershopService: BarbershopService,
  ) {}

  // async findBarbersByService(
  //   barbershopId: number,
  //   serviceId: number,
  // ): Promise<Barber[]> {
  //   await this.barbershopService.findBarbershopById(barbershopId);
  //   await this.barbershopService.findBarbershopServiceById(serviceId);

  //   const barbersAvailable: Barber[] =
  //     await this.barberRepository.findBarbersByService(barbershopId, serviceId);

  //   if (!barbersAvailable.length) {
  //     throw new NotFoundException('There are no barbers available');
  //   }

  //   return barbersAvailable;
  // }

  async findBarberById(id: number): Promise<Barber> {
    const barber: Barber = await this.barberRepository.findBarberById(id);

    if (!barber) {
      throw new NotFoundException('Barber not found');
    }

    return barber;
  }
}
