import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BarbershopModule } from './barbershop/barbershop.module';
import { LocationModule } from './location/location.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BarbershopModule, LocationModule, AuthenticationModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
