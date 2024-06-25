import { IsNumber, IsString } from 'class-validator';

export class CreateBarbershopDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  cnpj: string;

  @IsNumber()
  addressId: number;
}
