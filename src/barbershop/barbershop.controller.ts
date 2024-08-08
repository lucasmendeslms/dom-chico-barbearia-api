import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  // Query,
} from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { BarbershopDto } from './dto/barbershop.dto';
import { Barbershop } from './entities/barbershop.entity';
import { BarbershopServices } from './entities/barbershopService';
// import { Barber } from '../barber/entities/barber.entity';
// import { FindOneBarbershopDto } from './dto/read-barbershop.dto';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';

@Controller('barbershops')
export class BarbershopController {
  constructor(private readonly barbershopService: BarbershopService) {}

  @Post()
  async create(@Body() body: BarbershopDto): Promise<void> {
    return this.barbershopService.create(body);
  }

  @Get(':id')
  async findBarbershopById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Barbershop> {
    return this.barbershopService.findBarbershopById(id);
  }

  @Get(':id/services')
  async findAllBarbershopServices(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BarbershopServices[]> {
    return this.barbershopService.findAllBarbershopServices(id);
  }

  // @Get(':barbershopId/barbers')
  // async findBarbersByService(
  //   @Param('barbershopId', ParseIntPipe) barbershopId: number,
  //   @Query('service', ParseIntPipe) service: number,
  // ): Promise<Barber[]> {
  //   return this.barbershopService.findBarbersByService(barbershopId, service);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    // @Body() updateBarbershopDto: UpdateBarbershopDto,
  ) {
    return this.barbershopService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barbershopService.remove(+id);
  }
}
