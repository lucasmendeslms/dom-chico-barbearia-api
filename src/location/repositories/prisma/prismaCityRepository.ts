import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { CityRepository } from '../cityRepository';
import { City } from 'src/location/entities/city.entity';

@Injectable()
export class PrismaCityRepository implements CityRepository {
  constructor(private prisma: PrismaService) {}

  async createCity(cityData: City): Promise<number> {
    const { name, stateId } = cityData;

    const newCity = await this.prisma.cidade.create({
      data: {
        nome: name,
        estadoId: stateId,
      },
    });

    return newCity.id;
  }
}
