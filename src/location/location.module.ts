import { forwardRef, Module } from '@nestjs/common';

import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { PrismaService } from 'src/database/prisma.service';

import { AddressRepository } from './repositories/addressRepository';
import { CityRepository } from './repositories/cityRepository';
import { StateRepository } from './repositories/stateRepository';

import { PrismaAddressRepository } from './repositories/prisma/prismaAddressRepository';
import { PrismaCityRepository } from './repositories/prisma/prismaCityRepository';
import { PrismaStateRepository } from './repositories/prisma/prismaStateRepository';
import { BarbershopModule } from 'src/barbershop/barbershop.module';
// import { BarbershopService } from 'src/barbershop/barbershop.service';

@Module({
  imports: [forwardRef(() => BarbershopModule)],
  controllers: [LocationController],
  providers: [
    LocationService,
    PrismaService,
    { provide: AddressRepository, useClass: PrismaAddressRepository },
    { provide: CityRepository, useClass: PrismaCityRepository },
    { provide: StateRepository, useClass: PrismaStateRepository },
  ],
  exports: [
    AddressRepository,
    CityRepository,
    StateRepository,
    LocationService,
  ],
})
export class LocationModule {}
