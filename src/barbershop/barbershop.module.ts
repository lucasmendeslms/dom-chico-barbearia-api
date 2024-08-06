import { forwardRef, Module } from '@nestjs/common';

import { BarbershopService } from './barbershop.service';
import { BarbershopController } from './barbershop.controller';

import { BarbershopRepository } from './repositories/barbershopRepository';
import { PrismaBarbershopRepository } from './repositories/prisma/prismaBarbershopRepository';

import { PrismaService } from 'src/database/prisma.service';
import { LocationModule } from 'src/location/location.module';
import { LocationService } from 'src/location/location.service';

@Module({
  imports: [forwardRef(() => LocationModule)],
  controllers: [BarbershopController],
  providers: [
    BarbershopService,
    PrismaService,
    LocationService,
    { provide: BarbershopRepository, useClass: PrismaBarbershopRepository },
  ],
  exports: [BarbershopService, BarbershopRepository],
})
export class BarbershopModule {}
