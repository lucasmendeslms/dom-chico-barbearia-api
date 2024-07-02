import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { CityRepository } from '../cityRepository';
import { City } from 'src/location/entities/city.entity';

@Injectable()
export class PrismaCityRepository implements CityRepository {
  constructor(private prisma: PrismaService) {}

  async createCity(cityData: City): Promise<number> {
    const { name, stateId } = cityData;

    const newCity: City = await this.prisma.city.create({
      data: {
        name,
        stateId,
      },
    });

    return newCity.id;
  }
}
