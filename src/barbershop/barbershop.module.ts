import { Module } from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { BarbershopController } from './barbershop.controller';
import { BarbershopRepository } from './repository/barbershopRepository';
import { PrismaBarbershopRepository } from './repository/prisma/prismaBarbershopRepository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [BarbershopController],
  providers: [
    BarbershopService,
    PrismaService,
    { provide: BarbershopRepository, useClass: PrismaBarbershopRepository },
  ],
})
export class BarbershopModule {}
