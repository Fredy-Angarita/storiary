import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SaveTitleTypeDto } from '@dto/request/save.title.type.dto';
import { TitleTypeHandler } from '@handler/title.type.handler';

@Controller('title-type')
export class TitleTypeController {
  constructor(private readonly handler: TitleTypeHandler) {}

  @Get()
  async getTitleTypes() {
    return await this.handler.getTitleTypes();
  }
  @Put(':id')
  async updateTitleType(
    @Param() uuid: string,
    @Body() updateTitle: Partial<SaveTitleTypeDto>,
  ) {
    await this.handler.updateTitleType(uuid, updateTitle);
  }
  @Post()
  async saveTitleType(@Body() saveTitleTypeRequest: SaveTitleTypeDto) {
    return await this.handler.saveTitleType(saveTitleTypeRequest);
  }
}
