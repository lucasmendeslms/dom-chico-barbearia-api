import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { AddressRepository } from '../addressRepository';
import { Address } from 'src/location/entities/address.entity';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async createAddress(addressData: Address): Promise<number> {
    const { street, neighborhood, number, zipcode, cityId } = addressData;

    const newAddress = await this.prisma.endereco.create({
      data: {
        logradouro: street,
        numero: number,
        bairro: neighborhood,
        cep: zipcode,
        cidadeId: cityId,
      },
    });

    return newAddress.id;
  }
}
