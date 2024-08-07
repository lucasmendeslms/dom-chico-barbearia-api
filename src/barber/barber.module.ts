import { forwardRef, Module } from '@nestjs/common';
import { BarberService } from './barber.service';
import { BarberController } from './barber.controller';
import { BarbershopModule } from 'src/barbershop/barbershop.module';
import { BarberRepository } from './repositories/barberRepository';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaBarberRepository } from './repositories/prisma/prismaBarberRepository';

@Module({
  imports: [forwardRef(() => BarbershopModule)],
  controllers: [BarberController],
  providers: [
    PrismaService,
    BarberService,
    { provide: BarberRepository, useClass: PrismaBarberRepository },
  ],
  exports: [BarberService, BarberRepository],
})
export class BarberModule {}
