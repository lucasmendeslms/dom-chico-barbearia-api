import { Injectable } from '@nestjs/common';
import { LocationService } from 'src/location/location.service';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { BarbershopRepository } from './repositories/barbershopRepository';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';

@Injectable()
export class BarbershopService {
  constructor(
    private barbershopRepository: BarbershopRepository,
    private locationService: LocationService,
  ) {}

  async create(barbershopData: CreateBarbershopDto): Promise<void> {
    const { name, phone, cnpj, address } = barbershopData;

    const addressId: number = await this.locationService.createAddress(address);

    await this.barbershopRepository.create({ name, phone, cnpj, addressId });
  }

  findAll() {
    return `This action returns all barbershop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} barbershop`;
  }

  update(id: number) {
    return `This action updates a #${id} barbershop`;
  }

  remove(id: number) {
    return `This action removes a #${id} barbershop`;
  }
}
