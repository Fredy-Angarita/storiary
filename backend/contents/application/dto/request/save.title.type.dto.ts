import { IsNotEmpty, IsString } from 'class-validator';

export class SaveTitleTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
