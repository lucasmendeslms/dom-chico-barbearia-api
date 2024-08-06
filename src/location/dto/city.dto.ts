import { IsString, IsNumber } from 'class-validator';

export class CityDto {
  @IsString()
  name: string;

  @IsNumber()
  stateId: number;
}
