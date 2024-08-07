import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  ParseIntPipe,
  // Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CityDto } from './dto/city.dto';
import { State } from './entities/state.entity';
import { City } from './entities/city.entity';
import { Barbershop } from 'src/barbershop/entities/barbershop.entity';

@Controller('')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  //ADDRESS

  //CITY
  @Post('city')
  async createCity(@Body() body: CityDto): Promise<number> {
    return this.locationService.createCity(body);
  }

  @Get('states/:stateId/cities')
  async findCitiesWithBarbershop(
    @Param('stateId', ParseIntPipe) stateId: number,
  ): Promise<City[]> {
    return await this.locationService.findCitiesWithBarbershop(stateId);
  }

  @Get('cities/:cityId/barbershops')
  async findBarbershopsByCity(
    @Param('cityId', ParseIntPipe) cityId: number,
  ): Promise<Barbershop[]> {
    return await this.locationService.findBarbershopsByCity(cityId);
  }

  //STATE
  @Get('states')
  async findStatesWithBarbershop(): Promise<State[]> {
    return await this.locationService.findStatesWithBarbershop();
  }

  // @Get()
  // findAll() {
  //   return this.locationService.findAll();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string) {
  //   return this.locationService.update(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.locationService.remove(+id);
  // }
}
