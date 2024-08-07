import { Module } from '@nestjs/common';
import { BarbershopModule } from './barbershop/barbershop.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';
import { BarberModule } from './barber/barber.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    BarbershopModule,
    LocationModule,
    UserModule,
    BarberModule,
    AppointmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
