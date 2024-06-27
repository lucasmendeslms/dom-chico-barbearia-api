import { Module } from '@nestjs/common';

import { BarbershopService } from './barbershop.service';
import { BarbershopController } from './barbershop.controller';

import { BarbershopRepository } from './repositories/barbershopRepository';
import { PrismaBarbershopRepository } from './repositories/prisma/prismaBarbershopRepository';

import { PrismaService } from 'src/database/prisma.service';
import { LocationModule } from 'src/location/location.module';
import { LocationService } from 'src/location/location.service';

@Module({
  imports: [LocationModule],
  controllers: [BarbershopController],
  providers: [
    BarbershopService,
    PrismaService,
    { provide: BarbershopRepository, useClass: PrismaBarbershopRepository },
    LocationService,
  ],
})
export class BarbershopModule {}
