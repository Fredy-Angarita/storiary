import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTitleTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
