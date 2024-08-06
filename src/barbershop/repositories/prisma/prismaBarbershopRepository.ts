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

  async findBarbershopById(id: number): Promise<Barbershop> {
    return this.prisma.barbershop.findUnique({
      where: {
        id,
      },
    });
  }

  findBarbershopsInCity(cityId: number): Promise<Barbershop[]> {
    return this.prisma.barbershop.findMany({
      where: {
        address: {
          city: {
            id: cityId,
          },
        },
      },
    });
  }
}
