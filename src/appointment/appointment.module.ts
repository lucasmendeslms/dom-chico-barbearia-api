import { forwardRef, Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { BarbershopModule } from 'src/barbershop/barbershop.module';
import { UserModule } from 'src/user/user.module';
import { BarberModule } from 'src/barber/barber.module';
import { LocationService } from 'src/location/location.service';
import { BarbershopService } from 'src/barbershop/barbershop.service';
import { AppointmentRepository } from './repositories/appointmentRepository';
import { PrismaAppointmentRepository } from './repositories/prisma/prismaAppointmentRepository';
import { BarberService } from 'src/barber/barber.service';
import { PrismaService } from 'src/database/prisma.service';
import { LocationModule } from 'src/location/location.module';

@Module({
  imports: [
    forwardRef(() => BarbershopModule),
    forwardRef(() => UserModule),
    forwardRef(() => BarberModule),
    forwardRef(() => LocationModule),
  ],
  controllers: [AppointmentController],
  providers: [
    PrismaService,
    AppointmentService,
    LocationService,
    BarberService,
    BarbershopService,
    { provide: AppointmentRepository, useClass: PrismaAppointmentRepository },
  ],
  exports: [AppointmentService, AppointmentRepository],
})
export class AppointmentModule {}
