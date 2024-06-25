import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateCity } from './create-city.dto';

export class CreateAddress {
  @IsString()
  street: string;

  @IsString()
  neighborhood: string;

  @IsString()
  number: string;

  @IsString()
  zipcode: string;

  @ValidateNested()
  @Type(() => CreateCity)
  city: CreateCity;
}
