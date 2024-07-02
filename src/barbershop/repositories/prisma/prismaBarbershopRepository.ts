import { PrismaService } from 'src/database/prisma.service';
import { BarbershopRepository } from '../barbershopRepository';
import { Injectable } from '@nestjs/common';
import { Barbershop } from 'src/barbershop/entities/barbershop.entity';

@Injectable()
export class PrismaBarbershopRepository implements BarbershopRepository {
  constructor(private prisma: PrismaService) {}

  async create(barbershopData: Barbershop): Promise<void> {
    const { name, phone, cnpj, addressId } = barbershopData;

    await this.prisma.barbershop.create({
      data: {
        name,
        phone,
        cnpj,
        addressId,
      },
    });
  }
}
