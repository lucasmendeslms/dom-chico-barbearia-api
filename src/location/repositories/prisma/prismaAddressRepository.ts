import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { AddressRepository } from '../addressRepository';
import { Address } from 'src/location/entities/address.entity';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async createAddress(addressData: Address): Promise<number> {
    const { street, neighborhood, number, zipcode, cityId } = addressData;

    const newAddress: Address = await this.prisma.barbershopAddress.create({
      data: {
        street,
        number,
        neighborhood,
        zipcode,
        cityId,
      },
    });

    return newAddress.id;
  }
}
