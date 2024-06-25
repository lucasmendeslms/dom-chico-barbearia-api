import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateState } from './create-state.dto';

export class CreateCity {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateState)
  state: CreateState;
}
