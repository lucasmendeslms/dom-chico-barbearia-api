import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CityDto } from './city.dto';

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  neighborhood: string;

  @IsString()
  number: string;

  @IsString()
  zipcode: string;

  @ValidateNested()
  @Type(() => CityDto)
  city: CityDto;
}
