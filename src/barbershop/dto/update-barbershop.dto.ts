import { PartialType } from '@nestjs/mapped-types';
import { BarbershopDto } from './barbershop.dto';

export class UpdateBarbershopDto extends PartialType(BarbershopDto) {}
