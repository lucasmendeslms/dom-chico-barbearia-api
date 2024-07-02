import { IsString, Length } from 'class-validator';

export class CreateState {
  @IsString()
  name: string;

  @Length(2)
  @IsString()
  abbreviation: string;
}
