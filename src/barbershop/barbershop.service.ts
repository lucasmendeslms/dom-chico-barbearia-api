import { Injectable } from '@nestjs/common';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';
import { BarbershopRepository } from './repository/barbershopRepository';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';

@Injectable()
export class BarbershopService {
  constructor(private barbershopRepository: BarbershopRepository) {}

  async create(barbershopData: CreateBarbershopDto): Promise<void> {
    await this.barbershopRepository.create(barbershopData);
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
