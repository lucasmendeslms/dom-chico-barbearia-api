import { PartialType } from '@nestjs/mapped-types';
import { CreateBarbershopDto } from './create-barbershop.dto';

export class UpdateBarbershopDto extends PartialType(CreateBarbershopDto) {}
