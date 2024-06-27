import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateCity } from './dto/create-city.dto';

@Controller('')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('cidade')
  createCity(@Body() body: CreateCity) {
    return this.locationService.createCity(body);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.locationService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
