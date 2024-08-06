import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { AddressDto } from '../../location/dto/address.dto';
import { Type } from 'class-transformer';

export class BarbershopDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  cnpj: string;

  @IsNumber()
  adminId: number;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
