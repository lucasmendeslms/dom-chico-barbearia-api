import { PrismaService } from 'src/database/prisma.service';
import { BarbershopRepository } from '../barbershopRepository';
import { Injectable } from '@nestjs/common';
import { Barbershop } from 'src/barbershop/entities/barbershop.entity';

@Injectable()
export class PrismaBarbershopRepository implements BarbershopRepository {
  constructor(private prisma: PrismaService) {}

  async create(barbershopData: Barbershop): Promise<void> {
    const { name, phone, cnpj, addressId, adminId } = barbershopData;

    await this.prisma.barbershop.create({
      data: {
        name,
        phone,
        cnpj,
        addressId,
        adminId,
      },
    });
  }

  async findOne(id: number): Promise<Barbershop> {
    return await this.prisma.barbershop.findUnique({
      where: {
        id,
      },
    });
  }
}
