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

@Injectable()
export class BarbershopService {
  constructor(
    private barbershopRepository: BarbershopRepository,
    @Inject(forwardRef(() => LocationService))
    private locationService: LocationService,
  ) {}

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

  update(id: number) {
    return `This action updates a #${id} barbershop`;
  }

  remove(id: number) {
    return `This action removes a #${id} barbershop`;
  }
}
