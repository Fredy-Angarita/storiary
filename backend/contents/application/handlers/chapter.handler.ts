import { Inject } from '@nestjs/common';
import type { ChapterServicePort } from '../../domain/api/chapter.service.port';

export class ChapterHandler {
  constructor(
    @Inject('ChapterServicePort')
    private readonly chapterSP: ChapterServicePort,
  ) {}

  async getChapters() {
    return await this.chapterSP.getChapters();
  }
}
