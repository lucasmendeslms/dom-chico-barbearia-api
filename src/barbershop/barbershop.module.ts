import { forwardRef, Module } from '@nestjs/common';

import { BarbershopService } from './barbershop.service';
import { BarbershopController } from './barbershop.controller';

import { BarbershopRepository } from './repositories/barbershopRepository';
import { PrismaBarbershopRepository } from './repositories/prisma/prismaBarbershopRepository';

import { PrismaService } from 'src/database/prisma.service';
import { LocationModule } from 'src/location/location.module';
import { LocationService } from 'src/location/location.service';
import { BarberModule } from 'src/barber/barber.module';
import { BarberService } from 'src/barber/barber.service';

@Module({
  imports: [forwardRef(() => LocationModule), forwardRef(() => BarberModule)],
  controllers: [BarbershopController],
  providers: [
    BarbershopService,
    PrismaService,
    LocationService,
    BarberService,
    { provide: BarbershopRepository, useClass: PrismaBarbershopRepository },
  ],
  exports: [BarbershopService, BarbershopRepository],
})
export class BarbershopModule {}
