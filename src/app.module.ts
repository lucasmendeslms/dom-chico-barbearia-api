import { Module } from '@nestjs/common';
import { BarbershopModule } from './barbershop/barbershop.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BarbershopModule, LocationModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
