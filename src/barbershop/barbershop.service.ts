import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LocationService } from 'src/location/location.service';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { BarbershopRepository } from './repositories/barbershopRepository';
import { BarbershopDto } from './dto/barbershop.dto';
import { Barbershop } from './entities/barbershop.entity';
import { BarbershopServices } from './entities/barbershopService';
// import { Barber } from '../barber/entities/barber.entity';
import { BarberService } from 'src/barber/barber.service';

@Injectable()
export class BarbershopService {
  constructor(
    private barbershopRepository: BarbershopRepository,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
    @Inject(forwardRef(() => BarberService))
    private barberService: BarberService,
  ) {}

  // BARBERSHOP

  async create(barbershopData: BarbershopDto): Promise<void> {
    const { name, phone, cnpj, address, adminId } = barbershopData;

    const addressId: number = await this.locationService.createAddress(address);

    await this.barbershopRepository.create({
      name,
      phone,
      cnpj,
      addressId,
      adminId,
    });
  }

  async findBarbershopById(id: number): Promise<Barbershop> {
    const barbershop = await this.barbershopRepository.findBarbershopById(id);

    if (!barbershop) {
      throw new NotFoundException('Barbershop not found');
    }

    return barbershop;
  }

  async findBarbershopsInCity(cityId: number): Promise<Barbershop[]> {
    await this.locationService.findCityById(cityId);

    const barbershops: Barbershop[] =
      await this.barbershopRepository.findBarbershopsInCity(cityId);

    if (!barbershops.length) {
      throw new NotFoundException('There are no barbershops in this city');
    }

    return barbershops;
  }

  // SERVICES

  async findAllBarbershopServices(id: number): Promise<BarbershopServices[]> {
    await this.findBarbershopById(id);

    const barbershopServices: BarbershopServices[] =
      await this.barbershopRepository.findAllBarbershopServices(id);

    if (!barbershopServices) {
      throw new NotFoundException(
        'There are no services available in this barbershop',
      );
    }

    return barbershopServices;
  }

  // async findBarbersByService(
  //   barbershopId: number,
  //   serviceId: number,
  // ): Promise<Barber[]> {
  //   return await this.barberService.findBarbersByService(
  //     barbershopId,
  //     serviceId,
  //   );
  // }

  async findBarbershopServiceById(id: number): Promise<BarbershopServices> {
    const service: BarbershopServices =
      await this.barbershopRepository.findBarbershopServiceById(id);

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  update(id: number) {
    return `This action updates a #${id} barbershop`;
  }

  remove(id: number) {
    return `This action removes a #${id} barbershop`;
  }
}
