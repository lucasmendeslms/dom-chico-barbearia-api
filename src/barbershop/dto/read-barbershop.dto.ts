import { IsNumber } from 'class-validator';

export class FindOneBarbershopDto {
  @IsNumber()
  id: number;
}
