import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarbershopService } from './barbershop.service';
import { CreateBarbershopDto } from './dto/create-barbershop.dto';
// import { UpdateBarbershopDto } from './dto/update-barbershop.dto';

@Controller('barbearia')
export class BarbershopController {
  constructor(private readonly barbershopService: BarbershopService) {}

  @Post()
  create(@Body() body: CreateBarbershopDto) {
    return this.barbershopService.create(body);
  }

  @Get()
  findAll() {
    return this.barbershopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barbershopService.findOne(+id);
  }

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
