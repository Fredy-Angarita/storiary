import { TitleHandler } from '@handler/title.handler';
import { Controller, Get } from '@nestjs/common';

@Controller('title')
export class TitleController {
  constructor(private readonly titleHandler: TitleHandler) {}
  @Get()
  async getTitles() {
    return await this.titleHandler.getTitles();
  }
}
