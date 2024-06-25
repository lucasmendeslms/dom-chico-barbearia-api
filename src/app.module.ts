import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BarbershopModule } from './barbershop/barbershop.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [BarbershopModule, LocationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
