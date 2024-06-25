import { PrismaService } from 'src/database/prisma.service';
import { BarbershopRepository } from '../barbershopRepository';
import { CreateBarbershopDto } from 'src/barbershop/dto/create-barbershop.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBarbershopRepository implements BarbershopRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBarbershopDto): Promise<void> {
    const { name, phone, cnpj, addressId } = data;

    await this.prisma.barbearia.create({
      data: {
        nome: name,
        telefone: phone,
        cnpj: cnpj,
        enderecoId: addressId,
      },
    });
  }
}
