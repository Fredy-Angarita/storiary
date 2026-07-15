import { Controller, Get } from '@nestjs/common';
import { TitleTypeHandler } from '../../../../../application/handlers/title.type.handler';

@Controller('title-type')
export class TitleTypeController {
  constructor(private readonly handler: TitleTypeHandler) {}

  @Get()
  async getTitleTypes() {
    return await this.handler.getTitleTypes();
  }
}
