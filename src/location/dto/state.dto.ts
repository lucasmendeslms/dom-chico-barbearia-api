import { IsString, Length } from 'class-validator';

export class StateDto {
  @IsString()
  name: string;

  @Length(2)
  @IsString()
  abbreviation: string;
}
