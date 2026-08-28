import { ChapterHandler } from '@handler/chapter.handler';
import { Controller, Get } from '@nestjs/common';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterHandler: ChapterHandler) {}
  @Get()
  async getChapters() {
    return await this.chapterHandler.getChapters();
  }
}
