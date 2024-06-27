import { IsString, ValidateNested } from 'class-validator';
import { CreateAddress } from '../../location/dto/create-address.dto';
import { Type } from 'class-transformer';

export class CreateBarbershopDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  cnpj: string;

  @ValidateNested()
  @Type(() => CreateAddress)
  address: CreateAddress;
}
